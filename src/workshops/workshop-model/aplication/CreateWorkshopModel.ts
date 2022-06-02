import Capacity from '../domain/Capacity'
import City from '../domain/City'
import Name from '../domain/Name'
import PostalCode from '../domain/PostalCode'
import Province from '../domain/Province'
import { WorkshopModel } from '../domain/WorkshopModel'
import WorkShopModelRepository from '../domain/WorkshopModelRepository'
import Street from '../domain/Street'
import MailEventManager from '../domain/MailEventManager'
import Id from '../domain/Id'
import crypto from 'crypto'
export default class CreateWorkShopModel {
  private workShopModelRepository: WorkShopModelRepository

  constructor(workShopModelRepository: WorkShopModelRepository) {
    this.workShopModelRepository = workShopModelRepository
  }

  async createWorkShopModel(requestBody: any, mailEventManager: MailEventManager) {
    const workshop = new WorkshopModel(
      new Id(crypto.randomUUID()),
      new Name(String(requestBody.name)),
      new Street(String(requestBody.street)),
      new City(String(requestBody.city)),
      new PostalCode(String(requestBody.postalCode)),
      new Province(String(requestBody.province)),
      new Capacity(Number(requestBody.capacity))
    )
    await this.workShopModelRepository.save(workshop)
    await mailEventManager.sendNotification(['perepadial@gmail.com'])
  }
}
