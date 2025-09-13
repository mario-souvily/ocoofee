import { prisma } from "@/lib/prisma";
import { isEmail, isStrongPass, sanitizeUser } from "@/lib/utils";
import argon2 from "argon2";

// Cette fonction GET permet de récupérer tous les utilisateurs de la base de données via Prisma.
// Elle retourne un objet JSON contenant la liste des utilisateurs si elle existe, sinon une erreur 404.
export async function GET() {
  const users = await prisma.user.findMany({ orderBy: { id: "asc" } });
  if (users.length === 0) {
    return Response.json({ error: "No users found" }, { status: 404 });
  }
  return Response.json({ data: users.map(sanitizeUser) }, { status: 200 });
}

// Cette fonction POST permet de créer un nouvel utilisateur dans la base de données via Prisma.
// Elle retourne un objet JSON contenant le nouvel utilisateur si la création réussit, sinon une erreur 400.
export async function POST(req: Request) {
  try {
    const { prenom, nom, email, clerkId } = await req.json();

    // si un des champs est manquant retourne une erreur 400
    if (!prenom || !nom || !email || !clerkId) {
      return Response.json(
        { error: "Champs requis manquants" },
        { status: 400 }
      );
    }
    // si le mot de passe ne respecte pas les conditions retourne une erreur 400
    if (!isStrongPass(clerkId)) {
      return Response.json(
        {
          error:
            "Le mot de passe doit contenir au moins 8 caractères, une majuscule, un chiffre et un caractère spécial",
        },
        { status: 400 }
      );
    }
    // si l'email n'est pas valide retourne une erreur 400
    if (!isEmail(email)) {
      return Response.json({ error: "Email invalide" }, { status: 400 });
    }
    // si le mot de passe ne respecte pas les conditions retourne une erreur 400

    // si l'email existe déjà retourne une erreur 409
    const exists = await prisma.user.findUnique({ where: { email } });
    if (exists) {
      return Response.json(
        { error: "Cet email est déjà utilisé" },
        { status: 409 }
      );
    }

    // hash le mot de passe
    const hashed = await argon2.hash(clerkId);

    // crée le nouvel utilisateur
    const created = await prisma.user.create({
      data: {
        prenom,
        nom,
        email,
        clerkId: hashed,
        role: false, // par défaut false user
      },
    });

    return Response.json(
      { message: "Inscription réussie", data: sanitizeUser(created) },
      { status: 201 }
    );
  } catch (e) {
    console.error(e);
    return Response.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
