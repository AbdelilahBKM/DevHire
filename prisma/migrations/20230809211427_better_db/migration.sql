/*
  Warnings:

  - Added the required column `phone_number` to the `Company` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phone_number` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `company` ADD COLUMN `adress` VARCHAR(191) NULL,
    ADD COLUMN `city` VARCHAR(191) NULL,
    ADD COLUMN `phone_number` VARCHAR(64) NOT NULL;

-- AlterTable
ALTER TABLE `user` ADD COLUMN `phone_number` VARCHAR(64) NOT NULL;
