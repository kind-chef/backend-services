import express, { response } from 'express'
import Find from '../../application/Find'
import WorkshopMongoRepository from '../WorkshopMongoRepository'

export default async function findWorkshopController(req: express.Request, res: express.Response) {
  const workshopRepository = new WorkshopMongoRepository()
  const useCase = new Find(workshopRepository)
  try {
    const result = await useCase.execute(req)
    res.send(result)
  } catch (error: any) {
    response.status(404)
    response.send(error.message)
  }
}
