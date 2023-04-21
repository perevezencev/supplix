import '../styles/globals.css'
import { type AppProps } from 'next/app'
import { ClerkProvider } from '@clerk/nextjs'

import { trpc } from '../lib/trpc'

export const App = trpc.withTRPC((props: AppProps<object>) => {
  const { Component, pageProps } = props

  return (
    <ClerkProvider {...pageProps}>
      <Component {...pageProps} />
    </ClerkProvider>
  )
})

export default App
