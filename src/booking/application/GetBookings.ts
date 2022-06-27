import BookingRepository from '../domain/BookingRepository'

export default class GetBookings {
  private repository: BookingRepository

  constructor(repository: BookingRepository) {
    this.repository = repository
  }

  public async execute(request: any): Promise<any> {
    return await this.repository.getBookings(request.params.userId)
  }
}
