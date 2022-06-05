import express, { response } from 'express'
import Approve from '../../aplication/Approve'
import KitchenMongoRepository from '../KitchenMongoRepository'

export default async function ApproveController(req: express.Request, response: express.Response) {
  const KitchenRepository = new KitchenMongoRepository()
  const useCase = new Approve(KitchenRepository)
  try {
    const result = await useCase.execute(req)
    response.send(result)
  } catch (error) {
    response.send(error)
  }
}
