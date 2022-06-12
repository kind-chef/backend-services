import express from 'express'
import GetUnassignedWorkshops from '../../application/GetUnassignedWorkshops'
import WorkshopMongoRepository from '../WorkshopMongoRepository'
export default async function UnassignedWorkshopsController(eq: express.Request, response: express.Response) {
  const repository = new WorkshopMongoRepository()
  const useCase = new GetUnassignedWorkshops(repository)
  try {
    const result = await useCase.execute()
    response.send(result)
  } catch (e: any) {
    response.status(500)
    response.send(e.message)
  }
}
