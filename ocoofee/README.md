# Project Title

Ocoofee is a site that offers cafes.
I am creating this site with the aim of improving myself on technology such as nextjs in fron-end and back-end.
My database is made with postgresql via supabase and authentication with the Clerk library.

## Installation

Install my-project with npm

```bash
# Install all dependencies
  npm install

  cd my-project (ocoofee)

 # Start the development server
npm run dev

# Build the application for production
npm run build

# Start the application in production mode
npm run start

## Generate the Prisma client (after modifying the schema)
npm run prisma:generate

## Create and apply a migration
npm run prisma:migrate

Open Prisma Studio (graphical interface)
npm run prisma:studio

 ## Execute the seed (populate the database with test data)
npx prisma db seed

```

## Documentation

[Documentation]

https://nextjs.org/docs

https://www.prisma.io/docs

https://clerk.com/

https://supabase.com/

https://react.dev/

## 
1. Authentification
   Clerk → Middleware → Route protégée

2. Ajout au panier
   UI → CarteContext → Server Action → Prisma → PostgreSQL

3. Commande
   UI → Server Action → Prisma → PostgreSQL

4. API REST
   Client → Next.js API Route → Prisma → PostgreSQL → JSON Response

   # Authentification & sécurité
   
Middleware (src/middleware.ts)
Protection des routes avec Clerk
Routes publiques définies :
/, /coffee/*, /cafes/*
/auth/*, /sign-in/*, /sign-up/*
/api/coffee/*, /api/sendEmail, /contact, /api/docs

# API rest

|Route	| Méthode	|Description |
-------------------------------
|/api/coffee	|GET, POST	| Liste/ajout cafés|

| /api/coffee/all	| GET	| Tous les cafés |
| /api/coffee/grain	|GET	|Cafés en grains|
| /api/coffee/moulu	|GET|	Cafés moulus|
| /api/docs	|GET	|Swagger |JSON spec|
| /api/sendEmail	|POST	|Envoi email (EmailJS)|
| /api/user	|GET	|Informations utilisateur|
| /api/swaggerDocs|	GET	|Interface Swagger UI|

## Pages publiques
 
/                          → src/app/page.tsx (Home)/coffee/all                → Liste tous les cafés/cafes/grain               → Cafés en grains/cafes/moulu               → Cafés moulus/contact                   → Page contact/api/docs                  → Documentation Swagger

## Pages authentifiées
/inscription               → Formulaire inscription/sign-in                   → Connexion Clerk/sign-up                   → Inscript


# Stack technique
## Frontend
Framework: Next.js 15.5.2 (App Router)
UI: React 19.1.0, TypeScript 5
Styling: TailwindCSS 4
Composants UI: Radix UI, shadcn/ui
Authentification: Clerk (@clerk/nextjs ^6.31.8)
Icons: Lucide React, React Icons

## Backend
API: Next.js API Routes (REST)
ORM: Prisma 6.14.0
Base de données: PostgreSQL
Hashing: Argon2 (12 rounds)
Email: EmailJS (browser + nodejs)