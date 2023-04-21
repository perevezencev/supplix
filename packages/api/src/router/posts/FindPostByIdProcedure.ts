import { z } from 'zod'

import * as trpc from '../../trpc'

export const FindPostByIdProcedure = trpc.procedure
  .input(z.string())
  .query(({ ctx, input }) => {
    return ctx.prisma.post.findFirst({ where: { id: input } })
  })
