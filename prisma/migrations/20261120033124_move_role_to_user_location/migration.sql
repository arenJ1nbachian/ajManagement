
-- AlterTable
ALTER TABLE "UserLocation" ADD COLUMN "role" "Role";

UPDATE "UserLocation" SET "role" = "User"."role" FROM "User" WHERE "UserLocation"."userId" = "User"."id";

ALTER TABLE "UserLocation" ALTER COLUMN "role" SET NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "role";




