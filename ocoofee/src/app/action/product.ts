"use server";
import { prisma } from "@/lib/prisma";

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

export async function getAllCoffee() {
  const coffees = await prisma.cafe.findMany({});
  return coffees;
}

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
