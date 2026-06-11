-- CreateEnum
CREATE TYPE "RessourceType" AS ENUM ('recipe', 'procedure', 'policy');

-- CreateTable
CREATE TABLE "Ressource" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "locationId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "category" "RessourceType" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Ressource_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Ressource" ADD CONSTRAINT "Ressource_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ressource" ADD CONSTRAINT "Ressource_locationId_fkey" FOREIGN KEY ("locationId") REFERENCES "Location"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
