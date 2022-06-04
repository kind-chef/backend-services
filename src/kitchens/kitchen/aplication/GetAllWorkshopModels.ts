import { Kitchen } from '../domain/Kitchen'
import WorkShopModelRepository from '../domain/WorkshopModelRepository'

export default class GetAllWorkshopModels {
  private workShopModelRepository: WorkShopModelRepository

  constructor(workShopModelRepository: WorkShopModelRepository) {
    this.workShopModelRepository = workShopModelRepository
  }

  async execute(): Promise<Kitchen[]> {
    return await this.workShopModelRepository.findAll()
  }
}
