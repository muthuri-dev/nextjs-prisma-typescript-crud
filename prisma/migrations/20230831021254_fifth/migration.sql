/*
  Warnings:

  - A unique constraint covering the columns `[firstName]` on the table `Users` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `Users_firstName_key` ON `Users`(`firstName`);
