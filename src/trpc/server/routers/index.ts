import { createTRPCRouter, protectedProcedure, publicProcedure } from "..";
import { adminRouter } from "./admin";
import { cinemasRouter } from "./cinemas";
import { managerRoutes } from "./manager";
import { moviesRouter } from "./movies";
import { showtimesRoutes } from "./showtimes";


export const appRouter =createTRPCRouter({
   movies:moviesRouter,
   admins:adminRouter,
   cinemas: cinemasRouter,
   managers:managerRoutes,
   showtimes: showtimesRoutes,
   //managers: managersRoutes,
   // stripe: stripeRoutes,
   // tickets: ticketsRoutes,

})

export type AppRouter =typeof appRouter