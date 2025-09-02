import { prisma } from "../../../lib/prisma";

export async function POST(req: Request) {
  try {
    const { prenom, nom, email, pass } = await req.json();

    if (!prenom || !nom || !email || !pass) {
      return Response.json(
        { error: "Champs requis manquants" },
        { status: 400 }
      );
    }

    const existing = await prisma.user.findFirst({ where: { email } });
    if (existing) {
      return Response.json(
        { error: "Cet email est déjà utilisé" },
        { status: 409 }
      );
    }

    const user = await prisma.user.create({
      data: { prenom, nom, email, pass, role: false },
    });
    return Response.json(
      { message: "Inscription réussie", data: user },
      { status: 201 }
    );
  } catch (e) {
    return Response.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
export async function GET() {
  const users = await prisma.user.findMany();
  return Response.json(users);
}
