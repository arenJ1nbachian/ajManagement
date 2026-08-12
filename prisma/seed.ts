import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../generated/prisma";
import bcrypt from "bcryptjs";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL! });
const prisma = new PrismaClient({ adapter });

async function main() {
  await prisma.shiftAssignment.deleteMany();
  await prisma.userLocation.deleteMany();
  await prisma.position.deleteMany();
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

  const userLocation = await prisma.userLocation.create({
    data: { locationId: location.id, userId: user.id, status: "active" },
  });

  const shiftAssignment = await prisma.shiftAssignment.create({
    data: {
      userId: user.id,
      date: new Date(Date.now()),
      start: "8",
      end: "15",
      positionId: position.id,
    },
  });
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
