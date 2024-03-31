import { schemaCreateAdmin } from "@/forms/createAdmin";
import { createTRPCRouter, protectedProcedure } from "..";


export const adminRouter = createTRPCRouter({
    findAll: protectedProcedure('admin').query(({ctx})=>{
        return ctx.db.admin.findMany({include:{User:true}})
    }),
    adminMe:protectedProcedure().query(({ctx})=>{
        return ctx.db.admin.findUnique({where:{id:ctx.userId}})
    }),
    create: protectedProcedure('admin').input(schemaCreateAdmin).mutation(({ctx,input})=>{
        return ctx.db.admin.create({data:input})
    })
})