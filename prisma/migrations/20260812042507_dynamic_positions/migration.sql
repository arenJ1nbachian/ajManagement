/*
  Warnings:

  - You are about to drop the column `position` on the `ShiftAssignment` table. All the data in the column will be lost.
  - Added the required column `positionId` to the `ShiftAssignment` table without a default value. This is not possible if the table is not empty.

*/
-- AlterEnum
ALTER TYPE "Status" ADD VALUE 'pending';

-- AlterTable
ALTER TABLE "ShiftAssignment" DROP COLUMN "position",
ADD COLUMN     "positionId" TEXT NOT NULL;

-- DropEnum
DROP TYPE "Position";

-- CreateTable
CREATE TABLE "Position" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "locationId" TEXT NOT NULL,

    CONSTRAINT "Position_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ShiftAssignment" ADD CONSTRAINT "ShiftAssignment_positionId_fkey" FOREIGN KEY ("positionId") REFERENCES "Position"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Position" ADD CONSTRAINT "Position_locationId_fkey" FOREIGN KEY ("locationId") REFERENCES "Location"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
