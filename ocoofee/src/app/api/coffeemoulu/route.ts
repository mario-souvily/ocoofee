import { prisma } from "../../../lib/prisma";

export async function GET() {
  const coffees = await prisma.cafeMoulu.findMany({});
  if (coffees.length === 0) {
    return Response.json({ error: "pas de café moulu" }, { status: 404 });
  } else {
    return Response.json(coffees);
  }
}

export async function POST(req: Request) {
  const { nom, type, origine, quantite, description, prix, image } =
    await req.json();
  const coffee = await prisma.cafeMoulu.create({
    data: {
      nom,
      type,
      origine,
      quantite,
      description,
      prix,
      image,
    },
  });
  return Response.json(coffee);
}
