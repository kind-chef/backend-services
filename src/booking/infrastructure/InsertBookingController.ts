import Verify from '../application/Verify'
import { Request, Response } from 'express'
import BookingMongoRepository from './BookingMongoRepository'

export default async function insertBookingController(req: Request, response: Response) {
  const repository = new BookingMongoRepository()
  const useCase = new Verify(repository)
  try {
    useCase.execute(req.body)
  } catch (e: any) {
    response.status(400)
    response.send(e.message)
  }
  response.sendStatus(200)
}
