import Capacity from '../domain/Capacity'
import City from '../domain/City'
import Name from '../domain/Name'
import PostalCode from '../domain/PostalCode'
import Province from '../domain/Province'
import { WorkshopModel } from '../domain/WorkshopModel'
import WorkShopModelRepository from '../domain/WorkshopModelRepository'
import Street from '../domain/Street'

export default class CreateWorkShopModel {
  private workShopModelRepository: WorkShopModelRepository

  constructor(workShopModelRepository: WorkShopModelRepository) {
    this.workShopModelRepository = workShopModelRepository
  }

  async createWorkShopModel(requestBody: any) {
    console.log(requestBody)
    console.log(String(requestBody.postalCode).length)
    const workshop = new WorkshopModel(
      new Capacity(Number(requestBody.capacity)),
      new Street(String(requestBody.street)),
      new City(String(requestBody.city)),
      new PostalCode(String(requestBody.postalCode)),
      new Province(String(requestBody.province)),
      new Name(String(requestBody.name))
    )
    await this.workShopModelRepository.save(workshop)
  }
}
