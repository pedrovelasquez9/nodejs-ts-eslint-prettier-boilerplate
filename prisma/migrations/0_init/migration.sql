-- CreateTable
CREATE TABLE `book` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(45) NOT NULL,
    `author` VARCHAR(45) NOT NULL,
    `description` VARCHAR(45) NOT NULL,
    `status` TINYINT NULL,
    `created_by` VARCHAR(45) NULL,
    `created_at` DATETIME(0) NULL,
    `updated_by` VARCHAR(45) NULL,
    `updated_at` DATETIME(0) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

