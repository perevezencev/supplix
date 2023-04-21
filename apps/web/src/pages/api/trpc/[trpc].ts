import { NextRequest } from 'next/server'
import { fetchRequestHandler } from '@trpc/server/adapters/fetch'
import { getAuth, clerkClient } from '@clerk/nextjs/server'
import { router, createInnerContext } from '@acme/api'
import { User } from '@acme/auth'

import { prisma } from '../../../lib/prisma'

/**
 * Get user information from req
 *
 * @see https://clerk.com/docs/nextjs/trpc#using-clerk-in-your-trpc-context
 */
const getUser = async (...opts: Parameters<typeof getAuth>) => {
  const [req] = opts
  const { userId } = getAuth(req)
  const user = userId ? await clerkClient.users.getUser(userId) : { id: null }

  return new User(user.id)
}

export const config = {
  runtime: 'edge',
}

/**
 * Creates tRPC adapter for Next.js
 *
 * @see https://trpc.io/docs/server/api-handler
 */
export default async function handler(req: NextRequest) {
  const user = await getUser(req)

  return fetchRequestHandler({
    endpoint: '/api/trpc',
    router,
    req,
    createContext() {
      return createInnerContext({
        user,
        prisma,
      })
    },
  })
}
