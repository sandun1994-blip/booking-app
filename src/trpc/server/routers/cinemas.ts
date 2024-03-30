import { schemaCreateCinema } from '@/forms/createCinema'
import { createTRPCRouter, protectedProcedure, publicProcedure } from '..'

export const cinemasRouter = createTRPCRouter({
  cinemas: publicProcedure.query(({ ctx }) => {
    return ctx.db.cinema.findMany({
      include: {
        Screens: { include: { Showtimes: { include: { Movie: true } } } },
      },
    })
  }),
  createCinema: protectedProcedure('admin').input(schemaCreateCinema).mutation(({ ctx, input }) => {
    const { cinemaName, managerId, address, screens } = input

    return ctx.db.cinema.create({
      data: {
        name: cinemaName,
        Managers: {
          connectOrCreate: {
            create: { id: managerId },
            where: { id: managerId },
          },
        },
      },
    })
  }),
})
