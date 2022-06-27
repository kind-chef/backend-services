import express from 'express'
import GetBookedWorkshops from '../../application/GetBookedWorkshops'
import WorkshopMongoRepository from '../WorkshopMongoRepository'

export default async function bookedWorkshopController(req: express.Request, res: express.Response) {
  const repository = new WorkshopMongoRepository()
  const useCase = new GetBookedWorkshops(repository)
  try {
    const result = await useCase.execute(req)
    res.send(result)
  } catch (e: any) {
    res.status(400)
    res.send(e.message)
  }
}
