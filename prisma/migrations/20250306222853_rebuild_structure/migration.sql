/*
  Warnings:

  - You are about to drop the column `clientId` on the `Customer` table. All the data in the column will be lost.
  - You are about to drop the column `clientId` on the `Module` table. All the data in the column will be lost.
  - Added the required column `client_id` to the `Customer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `client_id` to the `Employee` table without a default value. This is not possible if the table is not empty.
  - Added the required column `client_id` to the `Module` table without a default value. This is not possible if the table is not empty.
  - Added the required column `customer_id` to the `Module` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Customer" DROP CONSTRAINT "Customer_clientId_fkey";

-- DropForeignKey
ALTER TABLE "Module" DROP CONSTRAINT "Module_clientId_fkey";

-- AlterTable
ALTER TABLE "Customer" DROP COLUMN "clientId",
ADD COLUMN     "client_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Employee" ADD COLUMN     "client_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Module" DROP COLUMN "clientId",
ADD COLUMN     "client_id" TEXT NOT NULL,
ADD COLUMN     "customer_id" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Customer" ADD CONSTRAINT "Customer_client_id_fkey" FOREIGN KEY ("client_id") REFERENCES "Client"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Employee" ADD CONSTRAINT "Employee_client_id_fkey" FOREIGN KEY ("client_id") REFERENCES "Client"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Module" ADD CONSTRAINT "Module_client_id_fkey" FOREIGN KEY ("client_id") REFERENCES "Client"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Module" ADD CONSTRAINT "Module_customer_id_fkey" FOREIGN KEY ("customer_id") REFERENCES "Customer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
