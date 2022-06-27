import UserId from '../domain/UserId'
import WorkshopRepository from '../domain/WorkshopRepository'

export default class GetBookedWorkshops {
  private repository: WorkshopRepository

  constructor(repository: WorkshopRepository) {
    this.repository = repository
  }

  public async execute(request: any) {
    const userId = new UserId(request.params.userId)
    const result = await this.repository.getBookedWorkshops(userId)
    return result
  }
}
