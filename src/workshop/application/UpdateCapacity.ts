import Id from '../domain/Id'
import RemainingCapacity from '../domain/RemainingCapacity'
import WorkshopRepository from '../domain/WorkshopRepository'

export default class UpdateCapacity {
  private repository: WorkshopRepository

  constructor(repository: WorkshopRepository) {
    this.repository = repository
  }

  async execute(jsonstr: string) {
    const content = JSON.parse(jsonstr)
    const workshopId = new Id(content.workshopId)
    const workshop = await this.repository.find(workshopId)
    await this.repository.updateCapacity(workshopId, new RemainingCapacity(workshop.remainingCapacity - content.places))
  }
}
