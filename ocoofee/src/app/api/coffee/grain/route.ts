import { prisma } from "@/lib/prisma";

//recuperer tout les cafés par categorie grain
export async function GET() {
  const coffees = await prisma.cafe.findMany({
    where: {
      categorie: "grain",
    },
  });

  if (!coffees || coffees.length === 0) {
    return Response.json({ error: "No coffees found" }, { status: 404 });
  }

  return Response.json(coffees);
}
