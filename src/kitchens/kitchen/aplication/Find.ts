import Id from '../domain/Id'
import Kitchen from '../domain/Kitchen'
import KitchenRepository from '../domain/KitchenRepository'

export default class Find {
  repository: KitchenRepository

  constructor(repository: KitchenRepository) {
    this.repository = repository
  }

  public async execute(request: any): Promise<Kitchen> {
    const id = new Id(request.params.kitchenId)
    return await this.repository.find(id)
  }
}
