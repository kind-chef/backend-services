import express, { response } from 'express'
import Insert from '../../application/Insert'
import WorkshopMongoRepository from '../WorkshopMongoRepository'

export default async function InsertWorkshopController(req: express.Request, response: express.Response) {
  const repository = new WorkshopMongoRepository()
  const useCase = new Insert(repository)
  try {
    const result = await useCase.execute(req.body)
    response.send(result)
  } catch (e) {
    response.send(e)
  }
}
