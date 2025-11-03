"use server";
import { prisma } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";

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
