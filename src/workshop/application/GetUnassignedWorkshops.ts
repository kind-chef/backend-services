import WorkshopRepository from '../domain/WorkshopRepository'

export default class GetUnassignedWorkshops {
  private repository: WorkshopRepository

  constructor(repository: WorkshopRepository) {
    this.repository = repository
  }

  async execute() {
    return await this.repository.getUnassignedWorkshops()
  }
}
