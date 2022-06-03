import express from 'express'
import CreateWorkShopModel from '../../aplication/CreateWorkshopModel'
import MailEventManager from '../../domain/MailEventManager'
import NodeMailerEventManager from '../NodeMailerEventManager'
import WorkShopModelMongoRepository from '../WorkShopModelMongoRepository'

export default createWorkShop

async function createWorkShop(req: express.Request, res: express.Response) {
  const workshopModelRepository: WorkShopModelMongoRepository = new WorkShopModelMongoRepository()
  const createWorkshopModelUseCase: CreateWorkShopModel = new CreateWorkShopModel(workshopModelRepository)
  const mailEventManager: MailEventManager = new NodeMailerEventManager()
  try {
    await createWorkshopModelUseCase.createWorkShopModel(req.body, mailEventManager)
    res.send('Workshop inserted correctly')
  } catch (error: any) {
    res.send(error.message)
  }
}
