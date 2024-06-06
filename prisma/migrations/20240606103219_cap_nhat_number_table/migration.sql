/*
  Warnings:

  - You are about to drop the column `name` on the `table` table. All the data in the column will be lost.
  - Added the required column `number` to the `Table` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `table` DROP COLUMN `name`,
    ADD COLUMN `number` VARCHAR(100) NOT NULL;
