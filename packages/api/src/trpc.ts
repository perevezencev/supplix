import { initTRPC, TRPCError } from '@trpc/server'
import { transformer } from '../transformer'

import { createInnerContext } from './context'

export const { router, middleware, procedure } = initTRPC
  .context<typeof createInnerContext>()
  .create({
    transformer,
    // errorFormatter({ shape }) {
    //   return shape;
    // },
  })
