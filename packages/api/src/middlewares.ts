import { TRPCError } from '@trpc/server'

import * as trpc from './trpc'

export const enforceUserIsAuthed = trpc.middleware(({ next, ctx }) => {
  const { user } = ctx

  if (!user.isAuthenticated) {
    throw new TRPCError({ code: 'UNAUTHORIZED' })
  }

  return next({
    ctx,
  })
})
