import LocationOfCinemas from '@/components/customComponents/LocationOfCinemas'
import { SearchCinemas } from '@/components/templates/SearchCinemas'
import { trpcClient } from '@/trpc/clients/client'
import { trpcServer } from '@/trpc/clients/server'

export default async function Home() {
  const data: any = await trpcServer.movies.movies.query()



  return (
    <main  >
     <SearchCinemas/>
    </main>
  )
}
