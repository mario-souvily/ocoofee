import { prisma } from "../../../lib/prisma";

//recuperer tout les cafés par categorie moulu ou grain et les trier par prix asc//
export async function GET() {
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
  if (!coffees) {
    return Response.json({ error: "No coffees found" }, { status: 404 });
  } else {
    return Response.json(coffees);
  }
}

export async function POST(req: Request) {
  const { nom, type, origine, quantite, description, prix, image, categorie } =
    await req.json();
  const coffee = await prisma.cafe.create({
    data: { nom, type, origine, quantite, description, prix, image, categorie },
  });
  return Response.json(coffee);
}
