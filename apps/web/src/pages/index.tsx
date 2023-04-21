import type { NextPage } from 'next'
import Head from 'next/head'

import { trpc } from '../lib/trpc'

type PostCardProps = {
  data: {
    post: {
      title: string
      content: string
    }
  }
}

const PostCard = (props: PostCardProps) => {
  const {
    data: { post },
  } = props

  return (
    <div className="card max-w-2xl rounded-lg border-2 border-gray-500 p-4 transition-all hover:scale-[101%]">
      <h2 className="text-2xl font-bold text-[hsl(280,100%,70%)]">
        {post.title}
      </h2>
      <p>{post.content}</p>
    </div>
  )
}

export const IndexPage: NextPage = () => {
  const { data } = trpc.posts.all.useQuery()

  return (
    <>
      <Head>
        <title>Web App - ACME Corp.</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex h-screen flex-col items-center bg-gradient-to-b from-[#E3B89C] to-[#99C5D5] text-white">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-8">
          <div className="flex h-[60vh] justify-center overflow-y-scroll px-4 text-2xl">
            {data ? (
              <div className="flex flex-col gap-4">
                {data?.map((post) => {
                  return <PostCard key={post.id} data={{ post }} />
                })}
              </div>
            ) : (
              <p>Loading..</p>
            )}
          </div>
        </div>
      </main>
    </>
  )
}

export default IndexPage
