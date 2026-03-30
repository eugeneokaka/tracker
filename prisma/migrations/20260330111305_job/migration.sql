/*
  Warnings:

  - You are about to drop the column `customerName` on the `Job` table. All the data in the column will be lost.
  - You are about to drop the column `customerPhone` on the `Job` table. All the data in the column will be lost.
  - You are about to drop the column `item` on the `Job` table. All the data in the column will be lost.
  - You are about to drop the column `problem` on the `Job` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[tenderNo]` on the table `Job` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `contract` to the `Job` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `Job` table without a default value. This is not possible if the table is not empty.
  - Added the required column `firm` to the `Job` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tenderNo` to the `Job` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Job" DROP COLUMN "customerName",
DROP COLUMN "customerPhone",
DROP COLUMN "item",
DROP COLUMN "problem",
ADD COLUMN     "contract" DECIMAL(10,2) NOT NULL,
ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "firm" TEXT NOT NULL,
ADD COLUMN     "tenderNo" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Job_tenderNo_key" ON "Job"("tenderNo");

-- CreateIndex
CREATE INDEX "Job_status_idx" ON "Job"("status");

-- CreateIndex
CREATE INDEX "Job_technicianId_idx" ON "Job"("technicianId");

-- CreateIndex
CREATE INDEX "Job_supervisorId_idx" ON "Job"("supervisorId");
