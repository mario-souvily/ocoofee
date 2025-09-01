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
