import * as trpc from '../../trpc'

import { FindAllPostsProcedure } from './FindAllPostsProcedure'
import { FindPostByIdProcedure } from './FindPostByIdProcedure'
import { CreatePostProcedure } from './CreatePostProcedure'

export const posts = trpc.router({
  all: FindAllPostsProcedure,
  byId: FindPostByIdProcedure,
  create: CreatePostProcedure,
})
