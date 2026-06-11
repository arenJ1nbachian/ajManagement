-- CreateEnum
CREATE TYPE "FlagStatus" AS ENUM ('open', 'resolved');

-- CreateTable
CREATE TABLE "InventoryItem" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "unit" TEXT NOT NULL,
    "locationId" TEXT NOT NULL,
    "lowThreshold" INTEGER NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "InventoryItem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "InventoryFlag" (
    "id" TEXT NOT NULL,
    "inventoryItemId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "note" TEXT NOT NULL,
    "flagStatus" "FlagStatus" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "InventoryFlag_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "InventoryItem" ADD CONSTRAINT "InventoryItem_locationId_fkey" FOREIGN KEY ("locationId") REFERENCES "Location"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InventoryFlag" ADD CONSTRAINT "InventoryFlag_inventoryItemId_fkey" FOREIGN KEY ("inventoryItemId") REFERENCES "InventoryItem"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InventoryFlag" ADD CONSTRAINT "InventoryFlag_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
