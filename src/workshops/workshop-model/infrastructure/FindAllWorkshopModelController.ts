import express from 'express'
import GetAllWorkshopModels from '../aplication/GetAllWorkshopModels'
import WorkShopModelMongoRepository from './WorkShopModelMongoRepository'

export default getAllWorkshopModels

async function getAllWorkshopModels(req: express.Request, res: express.Response) {
  const workshopModelRepository: WorkShopModelMongoRepository = new WorkShopModelMongoRepository()
  const useCase: GetAllWorkshopModels = new GetAllWorkshopModels(workshopModelRepository)
  try {
    const result = await useCase.execute()
    res.send(JSON.stringify(result))
  } catch (error: any) {
    res.send(error.message)
  }
}
