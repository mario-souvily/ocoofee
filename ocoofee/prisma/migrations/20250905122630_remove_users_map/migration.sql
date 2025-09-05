-- CreateTable
CREATE TABLE "public"."User" (
    "id" SERIAL NOT NULL,
    "clerkId" TEXT NOT NULL,
    "prenom" TEXT,
    "nom" TEXT,
    "email" TEXT NOT NULL,
    "role" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Cafe" (
    "id" SERIAL NOT NULL,
    "nom" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "origine" TEXT NOT NULL,
    "quantite" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "prix" DOUBLE PRECISION NOT NULL,
    "image" TEXT NOT NULL,
    "categorie" TEXT NOT NULL,

    CONSTRAINT "Cafe_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Commande" (
    "id" SERIAL NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "prix" DOUBLE PRECISION NOT NULL,
    "adresse" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Commande_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."CommandeItem" (
    "id" SERIAL NOT NULL,
    "commandeId" INTEGER NOT NULL,
    "cafeId" INTEGER NOT NULL,
    "quantite" INTEGER NOT NULL,
    "prix" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "CommandeItem_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_clerkId_key" ON "public"."User"("clerkId");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "public"."User"("email");

-- AddForeignKey
ALTER TABLE "public"."Commande" ADD CONSTRAINT "Commande_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."CommandeItem" ADD CONSTRAINT "CommandeItem_commandeId_fkey" FOREIGN KEY ("commandeId") REFERENCES "public"."Commande"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."CommandeItem" ADD CONSTRAINT "CommandeItem_cafeId_fkey" FOREIGN KEY ("cafeId") REFERENCES "public"."Cafe"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
