/*
  Warnings:

  - You are about to drop the column `client_id` on the `Module` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Module" DROP CONSTRAINT "Module_client_id_fkey";

-- AlterTable
ALTER TABLE "Module" DROP COLUMN "client_id",
ADD COLUMN     "clientId" TEXT;

-- AddForeignKey
ALTER TABLE "Module" ADD CONSTRAINT "Module_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "Client"("id") ON DELETE SET NULL ON UPDATE CASCADE;
