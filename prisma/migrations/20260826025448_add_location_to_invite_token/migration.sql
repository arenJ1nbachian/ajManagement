/*
  Warnings:

  - Added the required column `lid` to the `InviteToken` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "InviteToken" ADD COLUMN     "lid" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "InviteToken" ADD CONSTRAINT "InviteToken_lid_fkey" FOREIGN KEY ("lid") REFERENCES "Location"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
