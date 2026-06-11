-- CreateEnum
CREATE TYPE "Position" AS ENUM ('busboy', 'runner', 'juicebar', 'waiter', 'hostess');

-- CreateEnum
CREATE TYPE "SwapStatus" AS ENUM ('pending_target', 'pending_manager', 'approved', 'rejected_by_target', 'rejected_by_manager');

-- CreateTable
CREATE TABLE "ShiftAssignment" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "start" TEXT NOT NULL,
    "end" TEXT NOT NULL,
    "position" "Position" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ShiftAssignment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ShiftSwapRequest" (
    "id" TEXT NOT NULL,
    "requesterId" TEXT NOT NULL,
    "targetId" TEXT NOT NULL,
    "requesterShiftId" TEXT NOT NULL,
    "targetShiftId" TEXT NOT NULL,
    "status" "SwapStatus" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ShiftSwapRequest_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ShiftAssignment" ADD CONSTRAINT "ShiftAssignment_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ShiftSwapRequest" ADD CONSTRAINT "ShiftSwapRequest_requesterId_fkey" FOREIGN KEY ("requesterId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ShiftSwapRequest" ADD CONSTRAINT "ShiftSwapRequest_targetId_fkey" FOREIGN KEY ("targetId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ShiftSwapRequest" ADD CONSTRAINT "ShiftSwapRequest_requesterShiftId_fkey" FOREIGN KEY ("requesterShiftId") REFERENCES "ShiftAssignment"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ShiftSwapRequest" ADD CONSTRAINT "ShiftSwapRequest_targetShiftId_fkey" FOREIGN KEY ("targetShiftId") REFERENCES "ShiftAssignment"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
