import express from 'express'
import CreateWorkShopModel from '../aplication/CreateWorkshopModel'
import WorkShopModelMongoRepository from './WorkShopModelMongoRepository'

export default createWorkShop

async function createWorkShop(req: express.Request, res: express.Response) {
  const workshopModelRepository: WorkShopModelMongoRepository = new WorkShopModelMongoRepository()
  const createWorkshopModelUseCase: CreateWorkShopModel = new CreateWorkShopModel(workshopModelRepository)
  await createWorkshopModelUseCase.createWorkShopModel()
  res.send('Workshop inserted correctly')
}
