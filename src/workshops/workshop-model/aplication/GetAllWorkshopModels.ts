import { WorkshopModel } from '../domain/WorkshopModel'
import WorkShopModelRepository from '../domain/WorkshopModelRepository'

export default class GetAllWorkshopModels {
  private workShopModelRepository: WorkShopModelRepository

  constructor(workShopModelRepository: WorkShopModelRepository) {
    this.workShopModelRepository = workShopModelRepository
  }

  async execute(): Promise<WorkshopModel[]> {
    return await this.workShopModelRepository.findAll()
  }
}
