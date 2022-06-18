import Id from '../domain/Id'
import WorkshopRepository from '../domain/WorkshopRepository'

export default class Find {
  private repository: WorkshopRepository

  constructor(repository: WorkshopRepository) {
    this.repository = repository
  }

  public async execute(request: any): Promise<any> {
    const id = new Id(request.params.workshopId)
    console.log(id)
    return await this.repository.find(id)
  }
}
