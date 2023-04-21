import { type inferRouterInputs, type inferRouterOutputs } from '@trpc/server'

import * as trpc from '../trpc'
import { posts } from './posts'

// root router
export const router = trpc.router({
  posts,
})

// export type definition of API
export type Router = typeof router

/**
 * Inference helpers for input types
 *
 * @example type HelloInput = RouterInputs['example']['hello']
 **/
export type RouterInputs = inferRouterInputs<Router>

/**
 * Inference helpers for output types
 *
 * @example type HelloOutput = RouterOutputs['example']['hello']
 **/
export type RouterOutputs = inferRouterOutputs<Router>
