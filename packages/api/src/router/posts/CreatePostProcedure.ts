import { z } from 'zod'

import * as trpc from '../../trpc'
import { enforceUserIsAuthed } from '../../middlewares'

export const CreatePostProcedure = trpc.procedure
  .use(enforceUserIsAuthed)
  .input(z.object({ title: z.string(), content: z.string() }))
  .mutation(({ ctx, input }) => {
    return ctx.prisma.post.create({ data: input })
  })
