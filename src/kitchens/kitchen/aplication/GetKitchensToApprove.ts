import Kitchen from '../domain/Kitchen'
import KitchenRepository from '../domain/KitchenRepository'

export default class GetKitchensToApprove {
  private repository: KitchenRepository

  constructor(kitchenRepository: KitchenRepository) {
    this.repository = kitchenRepository
  }

  async execute(): Promise<Kitchen[]> {
    return await this.repository.searchUnapproved()
  }
}
