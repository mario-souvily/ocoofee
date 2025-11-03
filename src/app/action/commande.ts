"use server";
import { prisma } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";

// ajout un produit dans la base de donnees
export async function addToCart(
  cafeId: number,
  quantite: number,
  prix: number
) {
  const { userId: clerkId } = await auth();
  if (!clerkId) {
    return { error: "Utilisateur non trouvé" };
  }
  //creer un utilisateur si il n'existe pas
  let user = await prisma.user.findFirst({
    where: { clerkId: clerkId },
  });
  if (!user) {
    user = await prisma.user.create({
      data: { clerkId: clerkId, email: "user@example.com" },
    });
  }
  //creer un panier pour l'utilisateur
  let cart = await prisma.cart.findFirst({
    where: { userId: clerkId },
  });
  if (!cart) {
    cart = await prisma.cart.create({
      data: { userId: clerkId },
    });
  }

  const existingItem = await prisma.cartItem.findFirst({
    where: { cafeId: cafeId, cartId: cart.id },
  });
  if (existingItem) {
    await prisma.cartItem.update({
      where: { id: existingItem?.id },
      data: { quantite: (existingItem?.quantite ?? 0) + quantite },
    });
  } else {
    await prisma.cartItem.create({
      data: { cafeId, quantite, prix, cartId: cart.id, userId: clerkId },
    });
  }
}
export async function removeFromCartDB(cafeId: number) {
  const { userId } = await auth();
  if (!userId) throw new Error("Utilisateur non connecté");

  const cart = await prisma.cart.findFirst({
    where: { userId: userId },
  });

  if (!cart) throw new Error("Aucun panier trouvé");

  await prisma.cartItem.deleteMany({
    where: {
      cartId: cart.id,
      cafeId,
    },
  });
}
// fonction pour valider une commande
export async function validateCommande(adresse: string) {
  const { userId } = await auth();
  if (!userId) {
    return { error: "Utilisateur non trouvé" };
  }
  const user = await prisma.user.findUnique({
    where: { clerkId: userId },
  });
  console.log("user", user);
  if (!user) {
    return { error: "Utilisateur non trouvé" };
  }
  //recuperer le panier de l'utilisateur
  const cart = await prisma.cart.findFirst({
    where: { user: { clerkId: userId } },
    include: { items: true },
  });

  if (!cart) {
    return { error: "Panier non trouvé" };
  }

  const prix = cart.items.reduce(
    (acc: number, item: { prix: number; quantite: number }) =>
      acc + item.prix * item.quantite,
    0
  );

  const commande = await prisma.commande.create({
    data: {
      userId: user.id,
      adresse: adresse,
      date: new Date(),
      prix: prix,
      items: {
        create: cart.items.map((item) => ({
          cafeId: item.cafeId,
          quantite: item.quantite,
          prix: item.prix,
        })),
      },
    },
  });
  console.log("commande", commande);

  await prisma.cart.delete({
    where: { id: cart?.id },
  });
  return { success: "Commande créée avec succès" };
}
