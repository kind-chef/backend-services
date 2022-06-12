import Id from '../domain/Id'
import WorkshopRepository from '../domain/WorkshopRepository'

export default class Assign {
  private repository

  constructor(repository: WorkshopRepository) {
    this.repository = repository
  }

  public async execute(request: any) {
    const requestBody = request.body
    const workshopId = new Id(requestBody.workshopId)
    const userId = String(requestBody.userId)
    await this.repository.assign(workshopId, userId)
  }
}
