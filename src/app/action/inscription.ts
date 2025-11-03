"use server";
import { IInscription } from "@/@types";
import { prisma } from "@/lib/prisma";
import { isEmail, isStrongPass, sanitizeUser } from "@/lib/utils";
import argon2 from "argon2";

// Cette fonction POST permet de créer un nouvel utilisateur dans la base de données via Prisma.
// Elle retourne un objet JSON contenant le nouvel utilisateur si la création réussit, sinon une erreur 400.
export async function postInscription(inscription: IInscription) {
  try {
    if (
      !inscription?.prenom ||
      !inscription?.nom ||
      !inscription?.email ||
      !inscription?.password
    ) {
      return { ok: false, message: "Champs requis manquants" } as const;
    }
    if (!isStrongPass(inscription.password)) {
      return {
        ok: false,
        message:
          "Le mot de passe doit contenir au moins 8 caractères, une majuscule, un chiffre et un caractère spécial",
      } as const;
    }
    // si l'email n'est pas valide retourne une erreur 400
    if (!isEmail(inscription.email)) {
      return { ok: false, message: "Email invalide" } as const;
    }
    // si l'email existe déjà retourne une erreur 409
    const exists = await prisma.user.findFirst({
      where: { email: inscription.email },
    });
    if (exists) {
      return { ok: false, message: "Cet email est déjà utilisé" } as const;
    }

    const user = await prisma.user.create({
      data: {
        prenom: inscription.prenom,
        nom: inscription.nom,
        email: inscription.email,
        clerkId: await argon2.hash(inscription.password),
        role: false,
      },
    });
    return {
      ok: true,
      message: "Inscription réussie",
      data: sanitizeUser(user),
    } as const;
  } catch (e) {
    console.error(e);
    return { ok: false, message: "Erreur serveur" } as const;
  }
}
