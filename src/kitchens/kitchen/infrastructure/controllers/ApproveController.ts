import express, { response } from 'express'
import Approve from '../../aplication/Approve'
import WorkShopModelMongoRepository from '../WorkShopModelMongoRepository'

export default async function ApproveController(req: express.Request, response: express.Response) {
  const workshopModelRepository = new WorkShopModelMongoRepository()
  const useCase = new Approve(workshopModelRepository)
  try {
    const result = await useCase.execute(req)
    response.send(result)
  } catch (error) {
    response.send(error)
  }
}
