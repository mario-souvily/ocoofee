"use server";
import { ICoffee, ICoffeegrain, ICoffeemoulu } from "@/@types";
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
  //si le panier n'existe pas, le creer
  if (!cart) {
    cart = await prisma.cart.create({
      data: { userId: clerkId },
    });
  }

  //verifier si le produit existe deja dans le panier
  const existingItem = await prisma.cartItem.findFirst({
    where: { cafeId: cafeId, cartId: cart.id },
  });
  //si le produit existe deja dans le panier, incremente la quantite
  if (existingItem) {
    await prisma.cartItem.update({
      where: { id: existingItem?.id },
      data: { quantite: (existingItem?.quantite ?? 0) + quantite },
    });
    // sinon, ajouter le produit au panier
  } else {
    await prisma.cartItem.create({
      data: { cafeId, quantite, prix, cartId: cart.id, userId: clerkId },
    });
  }
}
// fonction pour mettre à jour la quantité d'un produit dans le panier
export async function updateCartItemQuantity(cafeId: number, quantite: number) {
  const { userId } = await auth();
  if (!userId) throw new Error("Utilisateur non connecté");

  const cart = await prisma.cart.findFirst({
    where: { userId: userId },
  });

  if (!cart) throw new Error("Aucun panier trouvé");

  const cartItem = await prisma.cartItem.findFirst({
    where: {
      cartId: cart.id,
      cafeId,
    },
  });

  if (!cartItem) throw new Error("Produit non trouvé dans le panier");

  if (quantite <= 0) {
    // Supprimer le produit si la quantité est 0 ou négative
    await prisma.cartItem.delete({
      where: { id: cartItem.id },
    });
  } else {
    // Mettre à jour la quantité
    await prisma.cartItem.update({
      where: { id: cartItem.id },
      data: { quantite },
    });
  }
}

// fonction pour supprimer un produit du panier
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
  //recuperer l'utilisateur
  const user = await prisma.user.findUnique({
    where: { clerkId: userId },
  });
  console.log("user", user);
  if (!user) {
    return { error: "Utilisateur non trouvé" };
  }
  //recuperer le panier de l'utilisateur
  const cart = await prisma.cart.findFirst({
    where: { userId: userId },
    include: { items: true },
  });

  if (!cart) {
    return { error: "Panier non trouvé" };
  }
  // calculer le prix total de la commande
  const prix = cart.items.reduce(
    (acc: number, item: { prix: number; quantite: number }) =>
      acc + item.prix * item.quantite,
    0
  );
  // creation de la commande et ajout des items dans la commande
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

  // supprimer le panier
  await prisma.cart.delete({
    where: { id: cart?.id },
  });
  return { success: "Commande créée avec succès" };
}

// fonction pour recuperer le panier de l'utilisateur

export async function getCartFromDB(): Promise<
  ICoffee[] | ICoffeegrain[] | ICoffeemoulu[]
> {
  const { userId } = await auth();
  if (!userId) {
    return [];
  }
  const user = await prisma.user.findFirst({
    where: { clerkId: userId },
    include: {
      carts: {
        include: {
          items: {
            include: {
              cafe: true,
            },
          },
        },
      },
    },
  });
  if (!user || user.carts.length === 0) {
    return [];
  }
  return user.carts[0].items.map(
    (item: {
      cafe: ICoffee | ICoffeegrain | ICoffeemoulu;
      quantite: number;
    }) => ({
      id: item.cafe.id as number,
      nom: item.cafe.nom,
      prix: item.cafe.prix as number,
      quantite: item.cafe.quantite, // Quantité du produit (ex: "250g", "500g")
      image: item.cafe.image,
      type: item.cafe.type as string,
      origine: item.cafe.origine as string,
      description: item.cafe.description as string,
      categorie: (item.cafe as ICoffee).categorie as string,
      quantityInCart: item.quantite, // Quantité dans le panier (nombre d'articles)
    })
  );
}
