/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  await prisma.user.upsert({
    where: { email: 'alex@example.com' },
    update: {
      name: 'Алексей Павлов Павлович',
      email: 'alex@example.com',
    },
    create: {
      name: 'Алексей Павлов Павлович',
      email: 'alex@example.com',
      password: 'password',
    },
  });
  await prisma.user.upsert({
    where: { email: 'parent@example.com' },
    update: {
      name: 'Сергей Павлов Павлович',
      email: 'serg@example.com',
    },
    create: {
      name: 'Алексей Павлов Павлович',
      email: 'serg@example.com',
      password: 'password',
    },
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
