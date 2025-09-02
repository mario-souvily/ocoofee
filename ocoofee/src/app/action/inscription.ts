"use server";
import { IInscription } from "@/@types";
import { prisma } from "@/lib/prisma";

export async function getInscription() {
  try {
    const inscriptions = await prisma.user.findMany({
      where: { role: { equals: false } },
    });
    return { ok: true, data: inscriptions } as const;
  } catch (e) {
    return { ok: false, message: "Erreur lors de la récupération" } as const;
  }
}

export async function postInscription(inscription: IInscription) {
  try {
    if (
      !inscription?.prenom ||
      !inscription?.nom ||
      !inscription?.email ||
      !inscription?.pass
    ) {
      return { ok: false, message: "Champs requis manquants" } as const;
    }

    const exists = await prisma.user.findFirst({
      where: { email: inscription.email },
    });
    if (exists) {
      return { ok: false, message: "Cet email est déjà utilisé" } as const;
    }

    const user = await prisma.user.create({
      data: { ...inscription, role: false },
    });
    return { ok: true, message: "Inscription réussie", data: user } as const;
  } catch (e) {
    return { ok: false, message: "Erreur serveur" } as const;
  }
}
