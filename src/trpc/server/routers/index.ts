import { createTRPCRouter, protectedProcedure, publicProcedure } from "..";
import { adminRouter } from "./admin";
import { cinemasRouter } from "./cinemas";
import { managerRoutes } from "./manager";
import { moviesRouter } from "./movies";


export const appRouter =createTRPCRouter({
   movies:moviesRouter,
   admins:adminRouter,
   cinemas: cinemasRouter,
   managers:managerRoutes
})

export type AppRouter =typeof appRouter