import Id from '../domain/Id'
import KitchenRepository from '../domain/KitchenRepository'

export default class Approve {
  repository: KitchenRepository

  constructor(repository: KitchenRepository) {
    this.repository = repository
  }

  public async execute(request: any): Promise<Boolean> {
    const id = new Id(request.params.kitchenId)
    return await this.repository.approve(id)
  }
}
