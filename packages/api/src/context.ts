import { type User } from '@acme/auth'
import { type PrismaClient } from '@prisma/client'

export type CreateContextOptions = {
  user: User
  prisma: PrismaClient
}

/**
 * Generates the "internals" for a tRPC context.
 *
 * @see https://create.t3.gg/en/usage/trpc#-servertrpccontextts
 */
export const createInnerContext = (opts: CreateContextOptions) => {
  const { user, prisma } = opts

  return {
    user,
    prisma,
  }
}
