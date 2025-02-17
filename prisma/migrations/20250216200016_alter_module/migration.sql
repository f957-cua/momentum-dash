/*
  Warnings:

  - You are about to drop the column `completed_date` on the `Module` table. All the data in the column will be lost.
  - You are about to drop the column `start_date` on the `Module` table. All the data in the column will be lost.
  - Added the required column `duration` to the `Module` table without a default value. This is not possible if the table is not empty.
  - Added the required column `status` to the `Module` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "ModuleDuration" AS ENUM ('HALF_HOUR', 'ONE_HOUR', 'ONE_AND_HALF_HOUR', 'TWO_HOURS', 'TWO_AND_HALF_HOURS', 'THREE_HOURS', 'THREE_AND_HALF_HOURS', 'FOUR_HOURS', 'FOUR_AND_HALF_HOURS', 'FIVE_HOURS', 'FIVE_AND_HALF_HOURS', 'SIX_HOURS', 'SIX_AND_HALF_HOURS', 'SEVEN_HOURS', 'SEVEN_AND_HALF_HOURS', 'EIGHT_HOURS');

-- CreateEnum
CREATE TYPE "ModuleStatus" AS ENUM ('PENDING', 'IN_PROGRESS', 'PAUSED', 'COMPLETED');

-- AlterTable
ALTER TABLE "Module" DROP COLUMN "completed_date",
DROP COLUMN "start_date",
ADD COLUMN     "duration" "ModuleDuration" NOT NULL,
ADD COLUMN     "notes" TEXT,
ADD COLUMN     "status" "ModuleStatus" NOT NULL;
