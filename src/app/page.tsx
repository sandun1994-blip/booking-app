
import { UserInfo } from '@/components/UserInfo'
import { trpcClient } from '@/trpc/clients/client'
import { trpcServer } from '@/trpc/clients/server'


export default async function Home() {

const data:any=await trpcServer.hello.query()


  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">  
     <div><UserInfo hello={data}/></div>
    </main>
  )
}
