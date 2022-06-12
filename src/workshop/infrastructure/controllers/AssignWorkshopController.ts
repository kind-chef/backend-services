import express, { response } from 'express'
import Assign from '../../application/Assign'
import WorkshopMongoRepository from '../WorkshopMongoRepository'

export default async function assignWorkshop(req: express.Request, res: express.Response) {
  const workshopRepository = new WorkshopMongoRepository()
  const useCase = new Assign(workshopRepository)
  try {
    await useCase.execute(req)
    res.sendStatus(200)
  } catch (error: any) {
    res.sendStatus(404)
  }
}
