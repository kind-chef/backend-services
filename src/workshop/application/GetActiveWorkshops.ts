import WorkshopRepository from '../domain/WorkshopRepository'

export default class GetActiveWorkshops {
  private repository: WorkshopRepository

  constructor(repository: WorkshopRepository) {
    this.repository = repository
  }

  public async execute() {
    return await this.repository.getActiveWorkshops()
  }
}
