-- AlterTable
ALTER TABLE "Location" ADD COLUMN     "setupCompletedAt" TIMESTAMP(3);

UPDATE "Location" 
SET "setupCompletedAt" = NOW()
WHERE EXISTS (
    SELECT 1 FROM "Position" WHERE "Position"."locationId" = "Location"."id"
)
