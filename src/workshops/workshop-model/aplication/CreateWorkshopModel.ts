import WorkShopModelRepository from '../domain/WorkshopModelRepository'

export default class CreateWorkShopModel {
  private workShopModelRepository: WorkShopModelRepository

  constructor(workShopModelRepository: WorkShopModelRepository) {
    this.workShopModelRepository = workShopModelRepository
  }

  async createWorkShopModel() {
    await this.workShopModelRepository.save()
  }
}
