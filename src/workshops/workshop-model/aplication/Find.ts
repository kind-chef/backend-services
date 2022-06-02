import Id from '../domain/Id'
import { WorkshopModel } from '../domain/WorkshopModel'
import WorkShopModelRepository from '../domain/WorkshopModelRepository'

export default class Find {
  repository: WorkShopModelRepository

  constructor(repository: WorkShopModelRepository) {
    this.repository = repository
  }

  public async execute(request: any): Promise<WorkshopModel> {
    const id = new Id(request.params.workshopId)
    return await this.repository.find(id)
  }
}
