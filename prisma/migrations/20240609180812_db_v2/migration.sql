/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `dishs` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[number]` on the table `tables` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `dishs_name_key` ON `dishs`(`name`);

-- CreateIndex
CREATE UNIQUE INDEX `tables_number_key` ON `tables`(`number`);
