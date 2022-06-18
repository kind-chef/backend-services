import InsertBooking from '../application/InsertBooking'
import express, { response } from 'express'
import BookingMongoRepository from './BookingMongoRepository'

export default async function insertBookingController(req: express.Request, response: express.Response) {
  const repository = new BookingMongoRepository()
  const useCase = new InsertBooking(repository)
  try {
    await useCase.execute(req.body)
  } catch (e: any) {
    response.status(400)
    response.send(e.message)
    return
  }
  response.sendStatus(200)
}
