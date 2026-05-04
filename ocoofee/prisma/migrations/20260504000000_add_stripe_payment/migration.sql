-- CreateEnum
CREATE TYPE "OrderStatus" AS ENUM ('PENDING', 'PAID', 'FAILED', 'CANCELLED');

-- AlterTable
ALTER TABLE "Commande" ADD COLUMN     "codePostal" TEXT,
ADD COLUMN     "status" "OrderStatus" NOT NULL DEFAULT 'PENDING',
ADD COLUMN     "stripePaymentIntentId" TEXT,
ADD COLUMN     "telephone" TEXT,
ADD COLUMN     "ville" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "Commande_stripePaymentIntentId_key" ON "Commande"("stripePaymentIntentId");
