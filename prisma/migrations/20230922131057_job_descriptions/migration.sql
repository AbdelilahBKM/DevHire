-- AlterTable
ALTER TABLE `Job` ADD COLUMN `description` LONGTEXT NULL DEFAULT '',
    ADD COLUMN `idealCandidate` LONGTEXT NULL DEFAULT '';

-- CreateTable
CREATE TABLE `Requirement` (
    `id` VARCHAR(191) NOT NULL,
    `title` VARCHAR(64) NOT NULL,
    `description` MEDIUMTEXT NOT NULL,
    `jobId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Requirement` ADD CONSTRAINT `Requirement_jobId_fkey` FOREIGN KEY (`jobId`) REFERENCES `Job`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
