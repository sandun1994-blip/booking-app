import { createTRPCRouter, publicProcedure } from "..";


export const appRouter =createTRPCRouter({
    hello:publicProcedure.query((ctx)=>{
        
        return {title:'News',content:'Lorem ipusm'}
    })
})

export type AppRouter =typeof appRouter