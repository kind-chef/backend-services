import Id from '../domain/Id'
import WorkShopModelRepository from '../domain/WorkshopModelRepository'

export default class Approve {
  repository: WorkShopModelRepository

  constructor(repository: WorkShopModelRepository) {
    this.repository = repository
  }

  public async execute(request: any): Promise<Boolean> {
    const id = new Id(request.params.kitchenId)
    return await this.repository.approve(id)
  }
}
