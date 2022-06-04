import express from 'express'
import CreateKitchen from '../../aplication/CreateKitchen'
import MailEventManager from '../../domain/MailEventManager'
import NodeMailerEventManager from '../NodeMailerEventManager'
import KitchenMongoRepository from '../KitchenMongoRepository'

export default createWorkShop

async function createWorkShop(req: express.Request, res: express.Response) {
  const KitchenRepository: KitchenMongoRepository = new KitchenMongoRepository()
  const createKitchenUseCase: CreateKitchen = new CreateKitchen(KitchenRepository)
  const mailEventManager: MailEventManager = new NodeMailerEventManager()
  try {
    await createKitchenUseCase.createKitchen(req.body, mailEventManager)
    res.send('Workshop inserted correctly')
  } catch (error: any) {
    res.send(error.message)
  }
}
