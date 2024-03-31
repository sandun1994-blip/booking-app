import { schemaCreateManager } from '@/forms/createManager'
import { createTRPCRouter, protectedProcedure } from '..'

export const managerRoutes = createTRPCRouter({
  create: protectedProcedure('admin')
    .input(schemaCreateManager)
    .mutation(({ ctx, input }) => {
        console.log(input,'input');
        
      return ctx.db.manager.create({ data: input })
    }),
    findAll:protectedProcedure('admin').query(({ctx})=>{
    return ctx.db.manager.findMany({include:{User:true}})
    })
})
