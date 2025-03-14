/*
  Warnings:

  - You are about to drop the column `duration` on the `Module` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Module" DROP COLUMN "duration";

-- DropEnum
DROP TYPE "ModuleDuration";
