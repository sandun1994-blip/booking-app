import { trpcClient } from '@/trpc/clients/client'
import { trpcServer } from '@/trpc/clients/server'

export default async function Home() {
  const data: any = await trpcServer.movies.movies.query()

  console.log(data)

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-primary-400">
      <div>
       
      </div>
    </main>
  )
}
