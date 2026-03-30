/*
  Warnings:

  - You are about to drop the column `contractValue` on the `Job` table. All the data in the column will be lost.
  - You are about to drop the column `contractorAddress` on the `Job` table. All the data in the column will be lost.
  - You are about to drop the column `contractorName` on the `Job` table. All the data in the column will be lost.
  - You are about to drop the column `creatorId` on the `Job` table. All the data in the column will be lost.
  - You are about to drop the column `description` on the `Job` table. All the data in the column will be lost.
  - You are about to drop the column `notes` on the `Job` table. All the data in the column will be lost.
  - You are about to drop the column `status` on the `Job` table. All the data in the column will be lost.
  - You are about to drop the column `subCounty` on the `Job` table. All the data in the column will be lost.
  - You are about to drop the column `supervisorId` on the `Job` table. All the data in the column will be lost.
  - You are about to drop the column `technicianId` on the `Job` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Job` table. All the data in the column will be lost.
  - You are about to drop the column `ward` on the `Job` table. All the data in the column will be lost.
  - You are about to drop the `ProgressLog` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Job" DROP CONSTRAINT "Job_creatorId_fkey";

-- DropForeignKey
ALTER TABLE "Job" DROP CONSTRAINT "Job_supervisorId_fkey";

-- DropForeignKey
ALTER TABLE "Job" DROP CONSTRAINT "Job_technicianId_fkey";

-- DropForeignKey
ALTER TABLE "ProgressLog" DROP CONSTRAINT "ProgressLog_jobId_fkey";

-- DropForeignKey
ALTER TABLE "ProgressLog" DROP CONSTRAINT "ProgressLog_userId_fkey";

-- DropIndex
DROP INDEX "Job_status_idx";

-- DropIndex
DROP INDEX "Job_subCounty_idx";

-- DropIndex
DROP INDEX "Job_ward_idx";

-- AlterTable
ALTER TABLE "Job" DROP COLUMN "contractValue",
DROP COLUMN "contractorAddress",
DROP COLUMN "contractorName",
DROP COLUMN "creatorId",
DROP COLUMN "description",
DROP COLUMN "notes",
DROP COLUMN "status",
DROP COLUMN "subCounty",
DROP COLUMN "supervisorId",
DROP COLUMN "technicianId",
DROP COLUMN "updatedAt",
DROP COLUMN "ward";

-- DropTable
DROP TABLE "ProgressLog";
