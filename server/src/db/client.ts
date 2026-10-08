// Single Prisma client bound to the PostgreSQL database from DATABASE_URL.
import { PrismaPg } from "@prisma/adapter-pg";

import { settings } from "#/config.ts";
import { PrismaClient } from "#generated/prisma/client.ts";

const adapter = new PrismaPg({ connectionString: settings.databaseUrl });
export const prisma = new PrismaClient({ adapter });

export async function assertDbReady(): Promise<void> {
  await prisma.$connect();
  await prisma.conversation.count();
}

export async function closeDb(): Promise<void> {
  await prisma.$disconnect();
}
