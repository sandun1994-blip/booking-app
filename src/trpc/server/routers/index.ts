import { createTRPCRouter, protectedProcedure, publicProcedure } from "..";


export const appRouter =createTRPCRouter({
    hello:protectedProcedure('admin').query((ctx)=>{
        
        return {title:'News no',content:'Lorem ipusm'}
    })
})

export type AppRouter =typeof appRouter