import express from 'express'
import Find from '../../aplication/Find'
import KitchenMongoRepository from '../KitchenMongoRepository'

export default async function findWorkShop(req: express.Request, res: express.Response) {
  const KitchenRepository = new KitchenMongoRepository()
  const useCase = new Find(KitchenRepository)
  try {
    const result = await useCase.execute(req)
    res.send(JSON.stringify(result))
  } catch (error: any) {
    res.send(error.message)
  }
}
