/*
  Warnings:

  - You are about to drop the column `customerName` on the `Job` table. All the data in the column will be lost.
  - You are about to drop the column `customerPhone` on the `Job` table. All the data in the column will be lost.
  - You are about to drop the column `item` on the `Job` table. All the data in the column will be lost.
  - You are about to drop the column `problem` on the `Job` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[tenderNo]` on the table `Job` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `contractValue` to the `Job` table without a default value. This is not possible if the table is not empty.
  - Added the required column `contractorName` to the `Job` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `Job` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tenderNo` to the `Job` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Job" DROP COLUMN "customerName",
DROP COLUMN "customerPhone",
DROP COLUMN "item",
DROP COLUMN "problem",
ADD COLUMN     "contractValue" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "contractorAddress" TEXT,
ADD COLUMN     "contractorName" TEXT NOT NULL,
ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "subCounty" TEXT,
ADD COLUMN     "tenderNo" TEXT NOT NULL,
ADD COLUMN     "ward" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "Job_tenderNo_key" ON "Job"("tenderNo");

-- CreateIndex
CREATE INDEX "Job_status_idx" ON "Job"("status");

-- CreateIndex
CREATE INDEX "Job_ward_idx" ON "Job"("ward");

-- CreateIndex
CREATE INDEX "Job_subCounty_idx" ON "Job"("subCounty");
