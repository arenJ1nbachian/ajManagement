import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../generated/prisma";
import bcrypt from "bcryptjs";
import { getMonday, addDays } from "../src/lib/dateUtils";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL! });
const prisma = new PrismaClient({ adapter });

async function main() {
  const weekStart = getMonday(new Date()); // "2026-08-10"

  await prisma.shiftAssignment.deleteMany();
  await prisma.userLocation.deleteMany();
  await prisma.position.deleteMany();
  await prisma.refreshToken.deleteMany();
  await prisma.user.deleteMany();
  await prisma.location.deleteMany();

  const location = await prisma.location.create({
    data: {
      address: "100 Prom. Du Centropolis",
      name: "Allo! Mon Coco",
      phone: "514-645-6615",
    },
  });

  const position = await prisma.position.create({
    data: { name: "Waiter", locationId: location.id },
  });

  const passwordHash = await bcrypt.hash("password123", 10);

  const user = await prisma.user.create({
    data: {
      firstname: "Aren",
      lastname: "Jinbachian",
      email: "arenjinbachian@gmail.com",
      passwordHash: passwordHash,
      role: "employee",
    },
  });

  const user2 = await prisma.user.create({
    data: {
      firstname: "Ari",
      lastname: "Jinbachian",
      email: "arijinbachian@gmail.com",
      passwordHash: passwordHash,
      role: "employee",
    },
  });

  const userLocation = await prisma.userLocation.create({
    data: { locationId: location.id, userId: user.id, status: "active" },
  });

  const userLocation2 = await prisma.userLocation.create({
    data: { locationId: location.id, userId: user2.id, status: "active" },
  });

  const shiftAssignment = await prisma.shiftAssignment.create({
    data: {
      userId: user.id,
      date: new Date(addDays(weekStart, 0)),
      start: "08:00",
      end: "14:30",
      positionId: position.id,
    },
  });

  const shiftAssignment3 = await prisma.shiftAssignment.create({
    data: {
      userId: user.id,
      date: new Date(addDays(weekStart, 1)),
      start: "08:00",
      end: "14:30",
      positionId: position.id,
    },
  });

  const shiftAssignment2 = await prisma.shiftAssignment.create({
    data: {
      userId: user2.id,
      date: new Date(addDays(weekStart, 4)),
      start: "06:30",
      end: "01:00",
      positionId: position.id,
    },
  });
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
