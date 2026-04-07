-- AlterTable
ALTER TABLE "Job" ADD COLUMN     "percentageCompleted" DOUBLE PRECISION NOT NULL DEFAULT 0,
ADD COLUMN     "title" TEXT;
