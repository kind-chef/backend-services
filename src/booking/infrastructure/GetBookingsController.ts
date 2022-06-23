import express from 'express'
import GetBookings from '../application/GetBookings'
import BookingMongoRepository from './BookingMongoRepository'

export default async function getBookingsController(req: express.Request, response: express.Response) {
  const repository = new BookingMongoRepository()
  const useCase = new GetBookings(repository)
  try {
    const result = await useCase.execute(req)
    response.send(result)
  } catch (e: any) {
    response.status(400)
    response.send(e.message)
    return
  }
}
