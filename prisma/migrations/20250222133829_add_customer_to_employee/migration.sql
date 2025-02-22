/*
  Warnings:

  - You are about to drop the `_CustomerToEmployee` table. If the table is not empty, all the data it contains will be lost.
  - Made the column `client_id` on table `Customer` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `customer_id` to the `Employee` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Customer" DROP CONSTRAINT "Customer_client_id_fkey";

-- DropForeignKey
ALTER TABLE "_CustomerToEmployee" DROP CONSTRAINT "_CustomerToEmployee_A_fkey";

-- DropForeignKey
ALTER TABLE "_CustomerToEmployee" DROP CONSTRAINT "_CustomerToEmployee_B_fkey";

-- AlterTable
ALTER TABLE "Customer" ALTER COLUMN "client_id" SET NOT NULL;

-- AlterTable
ALTER TABLE "Employee" ADD COLUMN     "customer_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Module" ALTER COLUMN "status" SET DEFAULT 'PENDING';

-- DropTable
DROP TABLE "_CustomerToEmployee";

-- AddForeignKey
ALTER TABLE "Customer" ADD CONSTRAINT "Customer_client_id_fkey" FOREIGN KEY ("client_id") REFERENCES "Client"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Employee" ADD CONSTRAINT "Employee_customer_id_fkey" FOREIGN KEY ("customer_id") REFERENCES "Customer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
