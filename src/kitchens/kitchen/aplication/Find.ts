import Id from '../domain/Id'
import { Kitchen } from '../domain/Kitchen'
import WorkShopModelRepository from '../domain/WorkshopModelRepository'

export default class Find {
  repository: WorkShopModelRepository

  constructor(repository: WorkShopModelRepository) {
    this.repository = repository
  }

  public async execute(request: any): Promise<Kitchen> {
    const id = new Id(request.params.kitchenId)
    return await this.repository.find(id)
  }
}
