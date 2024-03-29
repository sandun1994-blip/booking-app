import { createTRPCRouter, protectedProcedure, publicProcedure } from "..";
import { adminRouter } from "./admin";
import { moviesRouter } from "./movies";


export const appRouter =createTRPCRouter({
   movies:moviesRouter,
   admins:adminRouter
})

export type AppRouter =typeof appRouter