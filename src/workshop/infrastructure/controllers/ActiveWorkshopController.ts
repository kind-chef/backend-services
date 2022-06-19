import express, { response } from 'express'
import Find from '../../application/Find'
import GetActiveWorkshops from '../../application/GetActiveWorkshops'
import WorkshopMongoRepository from '../WorkshopMongoRepository'

export default async function activeWorkshopController(req: express.Request, res: express.Response) {
  const workshopRepository = new WorkshopMongoRepository()
  const useCase = new GetActiveWorkshops(workshopRepository)
  try {
    const result = await useCase.execute()
    res.send(result)
  } catch (e: any) {
    res.sendStatus(400)
  }
}
