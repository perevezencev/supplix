import * as trpc from '../../trpc'

export const FindAllPostsProcedure = trpc.procedure.query(({ ctx }) => {
  return ctx.prisma.post.findMany()
})
