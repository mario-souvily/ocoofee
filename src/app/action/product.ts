"use server";
import { prisma } from "@/lib/prisma";

// serveur action pour recuperer tous les cafés moulu et grain trier par prix asc
export async function getCoffee() {
  const coffees = await prisma.cafe.findMany({
    where: {
      categorie: {
        in: ["moulu", "grain"],
      },
    },
    orderBy: {
      prix: "asc",
    },
    take: 6,
  });
  return coffees;
}
// serveur action pour recuperer tous les cafés
export async function getAllCoffee() {
  const coffees = await prisma.cafe.findMany({});
  return coffees;
}
// serveur action pour recuperer tous les cafés moulu
export async function getCoffeeMoulu() {
  const coffees = await prisma.cafe.findMany({
    where: {
      categorie: "moulu",
    },
  });
  if (!coffees || coffees.length === 0) {
    return [];
  }

  return coffees;
}
// serveur action pour recuperer tous les cafés grain
export async function getCoffeeGrain() {
  const coffees = await prisma.cafe.findMany({
    where: {
      categorie: "grain",
    },
  });
  if (!coffees || coffees.length === 0) {
    return Response.json({ error: "No coffees found" }, { status: 404 });
  }

  return coffees;
}
