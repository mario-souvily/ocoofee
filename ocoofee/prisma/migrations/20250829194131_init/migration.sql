/*
  Warnings:

  - You are about to drop the column `cafeGrainId` on the `commandeitem` table. All the data in the column will be lost.
  - You are about to drop the column `cafeMouluId` on the `commandeitem` table. All the data in the column will be lost.
  - You are about to drop the `cafegrain` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `cafemoulu` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `cafeId` to the `CommandeItem` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `commandeitem` DROP FOREIGN KEY `CommandeItem_cafeGrainId_fkey`;

-- DropForeignKey
ALTER TABLE `commandeitem` DROP FOREIGN KEY `CommandeItem_cafeMouluId_fkey`;

-- DropIndex
DROP INDEX `CommandeItem_cafeGrainId_fkey` ON `commandeitem`;

-- DropIndex
DROP INDEX `CommandeItem_cafeMouluId_fkey` ON `commandeitem`;

-- AlterTable
ALTER TABLE `commandeitem` DROP COLUMN `cafeGrainId`,
    DROP COLUMN `cafeMouluId`,
    ADD COLUMN `cafeId` INTEGER NOT NULL;

-- DropTable
DROP TABLE `cafegrain`;

-- DropTable
DROP TABLE `cafemoulu`;

-- CreateTable
CREATE TABLE `Cafe` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nom` VARCHAR(191) NOT NULL,
    `type` VARCHAR(191) NOT NULL,
    `origine` VARCHAR(191) NOT NULL,
    `quantite` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `prix` DOUBLE NOT NULL,
    `image` VARCHAR(191) NOT NULL,
    `categorie` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `CommandeItem` ADD CONSTRAINT `CommandeItem_cafeId_fkey` FOREIGN KEY (`cafeId`) REFERENCES `Cafe`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
