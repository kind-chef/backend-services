import express from 'express'
import GetAllKitchens from '../../aplication/GetKitchensToApprove'
import KitchenMongoRepository from '../KitchenMongoRepository'

export default getAllKitchens

async function getAllKitchens(req: express.Request, res: express.Response) {
  const KitchenRepository: KitchenMongoRepository = new KitchenMongoRepository()
  const useCase: GetAllKitchens = new GetAllKitchens(KitchenRepository)
  try {
    const result = await useCase.execute()
    res.send(JSON.stringify(result))
  } catch (error: any) {
    res.send(error.message)
  }
}
