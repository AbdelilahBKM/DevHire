/*
  Warnings:

  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_appliedTo` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_savedJobs` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `_appliedTo` DROP FOREIGN KEY `_appliedTo_A_fkey`;

-- DropForeignKey
ALTER TABLE `_appliedTo` DROP FOREIGN KEY `_appliedTo_B_fkey`;

-- DropForeignKey
ALTER TABLE `_savedJobs` DROP FOREIGN KEY `_savedJobs_A_fkey`;

-- DropForeignKey
ALTER TABLE `_savedJobs` DROP FOREIGN KEY `_savedJobs_B_fkey`;

-- DropTable
DROP TABLE `User`;

-- DropTable
DROP TABLE `_appliedTo`;

-- DropTable
DROP TABLE `_savedJobs`;
