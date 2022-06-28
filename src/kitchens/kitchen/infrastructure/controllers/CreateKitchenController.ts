import express from 'express'
import CreateKitchen from '../../aplication/CreateKitchen'
import KitchenMongoRepository from '../KitchenMongoRepository'

export default createWorkShop

async function createWorkShop(req: express.Request, res: express.Response) {
  const KitchenRepository: KitchenMongoRepository = new KitchenMongoRepository()
  const createKitchenUseCase: CreateKitchen = new CreateKitchen(KitchenRepository)
  try {
    await createKitchenUseCase.createKitchen(req.body)
    res.send('Kitchen inserted correctly')
  } catch (error: any) {
    res.status(400)
    res.send(error.message)
  }
}
