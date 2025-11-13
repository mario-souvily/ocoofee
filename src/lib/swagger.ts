import { createSwaggerSpec } from 'next-swagger-doc';

export const getApiDocs = () => {
  const spec = createSwaggerSpec({
    apiFolder: 'src/app/api/swaggerDocs', // ou 'pages/api' si Pages Router
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'Ocoofee API Documentation',
        version: '1.0.0',
      },
      components: {
        schemas: {
          User: {
            type: 'object',
            properties: {
              id: { type: 'number' },
              prenom: { type: 'string' },
              nom: { type: 'string' },
              email: { type: 'string' },
              role: { type: 'boolean' },
              createdAt: { type: 'string', format: 'date-time' },
              updatedAt: { type: 'string', format: 'date-time' },
            },
          },
          Cafe: {
            type: 'object',
            properties: {
              id: { type: 'number' },
              nom: { type: 'string' },
              type: { type: 'string' },
              origine: { type: 'string' },
              quantite: { type: 'string' },
              description: { type: 'string' },
              prix: { type: 'number' },
              image: { type: 'string' },
              categorie: { type: 'string' },
            },
          },
          Commande: {
            type: 'object',
            properties: {
              id: { type: 'number' },
              date: { type: 'string', format: 'date-time' },
              prix: { type: 'number' },
              adresse: { type: 'string' },
              userId: { type: 'number' },
              createdAt: { type: 'string', format: 'date-time' },
              updatedAt: { type: 'string', format: 'date-time' },
            },
          },
          CommandeItem: {
            type: 'object',
            properties: {
              id: { type: 'number' },
              commandeId: { type: 'number' },
              cafeId: { type: 'number' },
              quantite: { type: 'number' },
              prix: { type: 'number' },
            },
          },
          Cart: {
            type: 'object',
            properties: {
              id: { type: 'number' },
              userId: { type: 'number' },
              createdAt: { type: 'string', format: 'date-time' },
              updatedAt: { type: 'string', format: 'date-time' },
            },
          },
          CartItem: {
            type: 'object',
            properties: {
              id: { type: 'number' },
              cartId: { type: 'number' },
              cafeId: { type: 'number' },
              quantite: { type: 'number' },
              prix: { type: 'number' },
            },
          },
          
          
        },
      },
    },
  });
  return spec;
};