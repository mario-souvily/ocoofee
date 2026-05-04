import { prisma } from "@/lib/prisma";
import { stripe, toStripeAmount } from "@/lib/stripe";
import { auth, currentUser } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

interface ShippingPayload {
  adresse: string;
  ville: string;
  codePostal: string;
  telephone?: string;
}

function isShippingPayload(value: unknown): value is ShippingPayload {
  if (!value || typeof value !== "object") return false;
  const v = value as Record<string, unknown>;
  return (
    typeof v.adresse === "string" &&
    v.adresse.trim().length > 0 &&
    typeof v.ville === "string" &&
    v.ville.trim().length > 0 &&
    typeof v.codePostal === "string" &&
    v.codePostal.trim().length > 0 &&
    (v.telephone === undefined || typeof v.telephone === "string")
  );
}

export async function POST(request: Request) {
  const { userId: clerkId } = await auth();
  if (!clerkId) {
    return NextResponse.json(
      { error: "Utilisateur non authentifié" },
      { status: 401 }
    );
  }

  const body = await request.json().catch(() => null);
  if (!isShippingPayload(body)) {
    return NextResponse.json(
      { error: "Adresse de livraison invalide" },
      { status: 400 }
    );
  }

  const clerkUser = await currentUser();
  const email =
    clerkUser?.primaryEmailAddress?.emailAddress ??
    clerkUser?.emailAddresses[0]?.emailAddress;

  const user = await prisma.user.upsert({
    where: { clerkId },
    update: email ? { email } : {},
    create: {
      clerkId,
      email: email ?? `${clerkId}@unknown.local`,
      prenom: clerkUser?.firstName ?? undefined,
      nom: clerkUser?.lastName ?? undefined,
    },
  });

  const cart = await prisma.cart.findFirst({
    where: { userId: clerkId },
    include: { items: { include: { cafe: true } } },
  });

  if (!cart || cart.items.length === 0) {
    return NextResponse.json({ error: "Panier vide" }, { status: 400 });
  }

  const totalEuros = cart.items.reduce(
    (sum, item) => sum + item.cafe.prix * item.quantite,
    0
  );
  const amount = toStripeAmount(totalEuros);

  if (amount < 50) {
    return NextResponse.json(
      { error: "Montant minimum 0,50€" },
      { status: 400 }
    );
  }

  const commande = await prisma.commande.create({
    data: {
      userId: user.id,
      date: new Date(),
      prix: totalEuros,
      adresse: body.adresse.trim(),
      ville: body.ville.trim(),
      codePostal: body.codePostal.trim(),
      telephone: body.telephone?.trim() || null,
      status: "PENDING",
      items: {
        create: cart.items.map((item) => ({
          cafeId: item.cafeId,
          quantite: item.quantite,
          prix: item.cafe.prix,
        })),
      },
    },
  });

  const paymentIntent = await stripe.paymentIntents.create({
    amount,
    currency: "eur",
    automatic_payment_methods: { enabled: true },
    receipt_email: email ?? undefined,
    metadata: {
      commandeId: String(commande.id),
      clerkId,
    },
  });

  await prisma.commande.update({
    where: { id: commande.id },
    data: { stripePaymentIntentId: paymentIntent.id },
  });

  return NextResponse.json({
    clientSecret: paymentIntent.client_secret,
    commandeId: commande.id,
  });
}
