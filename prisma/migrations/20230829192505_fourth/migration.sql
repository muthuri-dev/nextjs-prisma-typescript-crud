-- CreateTable
CREATE TABLE `Tags` (
    `id` VARCHAR(191) NOT NULL,
    `tagName` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_TagsToTodos` (
    `A` VARCHAR(191) NOT NULL,
    `B` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `_TagsToTodos_AB_unique`(`A`, `B`),
    INDEX `_TagsToTodos_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `_TagsToTodos` ADD CONSTRAINT `_TagsToTodos_A_fkey` FOREIGN KEY (`A`) REFERENCES `Tags`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_TagsToTodos` ADD CONSTRAINT `_TagsToTodos_B_fkey` FOREIGN KEY (`B`) REFERENCES `Todos`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
