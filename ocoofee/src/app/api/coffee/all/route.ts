import { prisma } from "../../../../lib/prisma";

export async function GET() {
  const coffees = await prisma.cafe.findMany({
    orderBy: {
      prix: "asc",
    },
  });

  if (!coffees || coffees.length === 0) {
    return Response.json({ error: "No coffees found" }, { status: 404 });
  }

  return Response.json(coffees);
}
