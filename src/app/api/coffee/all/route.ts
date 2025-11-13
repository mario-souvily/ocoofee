
import { prisma } from "../../../../lib/prisma";

/**
@ swagger 
    @tags(['coffee'])
    @summary('Recuperer tout les cafés par categorie moulu ou grain et les trier par prix asc')
    @description('Recuperer tout les cafés par categorie moulu ou grain et les trier par prix asc')
    @returns(200, { description: 'Liste des cafés', schema: { type: 'array', items: { $ref: '#/components/schemas/Cafe' } } })
    @returns(404, { description: 'No coffees found' })
    @returns(500, { description: 'Internal server error' })
*/
//recuperer tout les cafés par categorie moulu ou grain et les trier par prix asc//
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
