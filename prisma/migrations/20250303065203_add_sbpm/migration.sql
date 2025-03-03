/*
  Warnings:

  - You are about to drop the column `email` on the `Client` table. All the data in the column will be lost.
  - You are about to drop the column `client_id` on the `Customer` table. All the data in the column will be lost.
  - You are about to drop the column `email` on the `Customer` table. All the data in the column will be lost.
  - You are about to drop the column `first_name` on the `Employee` table. All the data in the column will be lost.
  - You are about to drop the column `last_name` on the `Employee` table. All the data in the column will be lost.
  - Added the required column `sbpm_id` to the `Client` table without a default value. This is not possible if the table is not empty.
  - Added the required column `clientId` to the `Customer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sbpm_id` to the `Customer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Employee` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sbpm_id` to the `Employee` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sbpm_id` to the `Module` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `Module` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Customer" DROP CONSTRAINT "Customer_client_id_fkey";

-- DropIndex
DROP INDEX "Client_email_key";

-- AlterTable
ALTER TABLE "Client" DROP COLUMN "email",
ADD COLUMN     "sbpm_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Customer" DROP COLUMN "client_id",
DROP COLUMN "email",
ADD COLUMN     "clientId" TEXT NOT NULL,
ADD COLUMN     "sbpm_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Employee" DROP COLUMN "first_name",
DROP COLUMN "last_name",
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "sbpm_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Module" ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "sbpm_id" TEXT NOT NULL,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL;

-- CreateTable
CREATE TABLE "Sbpm" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Sbpm_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Client" ADD CONSTRAINT "Client_sbpm_id_fkey" FOREIGN KEY ("sbpm_id") REFERENCES "Sbpm"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Customer" ADD CONSTRAINT "Customer_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "Client"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Customer" ADD CONSTRAINT "Customer_sbpm_id_fkey" FOREIGN KEY ("sbpm_id") REFERENCES "Sbpm"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Employee" ADD CONSTRAINT "Employee_sbpm_id_fkey" FOREIGN KEY ("sbpm_id") REFERENCES "Sbpm"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Module" ADD CONSTRAINT "Module_sbpm_id_fkey" FOREIGN KEY ("sbpm_id") REFERENCES "Sbpm"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
