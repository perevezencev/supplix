import { httpBatchLink } from '@trpc/client'
import { createTRPCNext } from '@trpc/next'
import { type Router } from '@acme/api'
import { transformer } from '@acme/api/transformer'

const getBaseUrl = () => {
  // browser should use relative url
  if (typeof window !== 'undefined') {
    return ''
  }

  // SSR should use vercel url
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`
  }

  // dev SSR should use localhost
  return `http://localhost:${process.env.PORT ?? 3000}`
}

export const trpc = createTRPCNext<Router>({
  config() {
    return {
      transformer,
      links: [
        httpBatchLink({
          url: `${getBaseUrl()}/api/trpc`,
        }),
      ],
    }
  },
})
