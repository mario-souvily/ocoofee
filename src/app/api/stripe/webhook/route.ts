import { prisma } from "@/lib/prisma";
import { stripe } from "@/lib/stripe";
import { NextResponse } from "next/server";
import type Stripe from "stripe";

export const runtime = "nodejs";

export async function POST(request: Request) {
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
  if (!webhookSecret) {
    return NextResponse.json(
      { error: "Webhook secret non configuré" },
      { status: 500 }
    );
  }

  const signature = request.headers.get("stripe-signature");
  if (!signature) {
    return NextResponse.json({ error: "Signature manquante" }, { status: 400 });
  }

  const rawBody = await request.text();

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(rawBody, signature, webhookSecret);
  } catch (err) {
    const message = err instanceof Error ? err.message : "Signature invalide";
    return NextResponse.json({ error: message }, { status: 400 });
  }

  switch (event.type) {
    case "payment_intent.succeeded": {
      const intent = event.data.object;
      const commandeId = Number(intent.metadata.commandeId);
      const clerkId = intent.metadata.clerkId;
      if (!Number.isFinite(commandeId)) break;

      await prisma.commande.update({
        where: { id: commandeId },
        data: { status: "PAID" },
      });

      if (clerkId) {
        const cart = await prisma.cart.findFirst({
          where: { userId: clerkId },
        });
        if (cart) {
          await prisma.cartItem.deleteMany({ where: { cartId: cart.id } });
          await prisma.cart.delete({ where: { id: cart.id } });
        }
      }
      break;
    }
    case "payment_intent.payment_failed": {
      const intent = event.data.object;
      const commandeId = Number(intent.metadata.commandeId);
      if (!Number.isFinite(commandeId)) break;

      await prisma.commande.update({
        where: { id: commandeId },
        data: { status: "FAILED" },
      });
      break;
    }
    case "payment_intent.canceled": {
      const intent = event.data.object;
      const commandeId = Number(intent.metadata.commandeId);
      if (!Number.isFinite(commandeId)) break;

      await prisma.commande.update({
        where: { id: commandeId },
        data: { status: "CANCELLED" },
      });
      break;
    }
  }

  return NextResponse.json({ received: true });
}
