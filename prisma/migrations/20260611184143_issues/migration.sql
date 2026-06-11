-- CreateEnum
CREATE TYPE "ReportStatus" AS ENUM ('open', 'acknowledged', 'resolved');

-- CreateTable
CREATE TABLE "IssueReport" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "locationId" TEXT NOT NULL,
    "resolvedAt" TIMESTAMP(3),
    "note" TEXT NOT NULL,
    "reportStatus" "ReportStatus" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "IssueReport_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "IssueReport" ADD CONSTRAINT "IssueReport_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "IssueReport" ADD CONSTRAINT "IssueReport_locationId_fkey" FOREIGN KEY ("locationId") REFERENCES "Location"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
