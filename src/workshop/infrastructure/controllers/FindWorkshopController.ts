import express, { response } from 'express'
import Find from '../../application/Find'
import WorkshopMongoRepository from '../WorkshopMongoRepository'

export default async function findWorkshopController(req: express.Request, res: express.Response) {
  const workshopRepository = new WorkshopMongoRepository()
  const useCase = new Find(workshopRepository)
  console.log('use case created')
  try {
    const result = await useCase.execute(req)
    console.log(result)
    res.send(result)
  } catch (error: any) {
    response.status(404)
    response.send(error.message)
  }
}
