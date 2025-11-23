// Prisma client - will be available once Prisma is set up
let PrismaClient: any
try {
  const prismaModule = require('@prisma/client')
  PrismaClient = prismaModule.PrismaClient
} catch (e) {
  // Prisma not set up yet
  PrismaClient = null
}

const globalForPrisma = globalThis as unknown as {
  prisma: any | undefined
}

export const prisma = PrismaClient 
  ? (globalForPrisma.prisma ?? new PrismaClient())
  : null

if (process.env.NODE_ENV !== 'production' && prisma) {
  globalForPrisma.prisma = prisma
}

