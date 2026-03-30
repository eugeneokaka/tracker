/*
  Warnings:

  - You are about to drop the `Job` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Job";

-- CreateTable
CREATE TABLE "tender" (
    "id" TEXT NOT NULL,
    "tenderNo" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "contractValue" DOUBLE PRECISION NOT NULL,
    "contractorName" TEXT NOT NULL,
    "contractorAddress" TEXT,
    "ward" TEXT,
    "subCounty" TEXT,
    "status" "JobStatus" NOT NULL DEFAULT 'PENDING',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "technicianId" TEXT,
    "supervisorId" TEXT,
    "creatorId" TEXT,
    "notes" TEXT,

    CONSTRAINT "tender_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "tender_tenderNo_key" ON "tender"("tenderNo");

-- CreateIndex
CREATE INDEX "tender_status_idx" ON "tender"("status");

-- CreateIndex
CREATE INDEX "tender_ward_idx" ON "tender"("ward");

-- CreateIndex
CREATE INDEX "tender_subCounty_idx" ON "tender"("subCounty");

-- AddForeignKey
ALTER TABLE "tender" ADD CONSTRAINT "tender_creatorId_fkey" FOREIGN KEY ("creatorId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tender" ADD CONSTRAINT "tender_supervisorId_fkey" FOREIGN KEY ("supervisorId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tender" ADD CONSTRAINT "tender_technicianId_fkey" FOREIGN KEY ("technicianId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
