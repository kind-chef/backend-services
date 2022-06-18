import Booking from '../domain/Booking'
import BookingRepository from '../domain/BookingRepository'
import CustomerId from '../domain/CustomerId'
import NotEnoughCapacityException from '../domain/NotEnoughCapacityException'
import Places from '../domain/Places'
import getWorkshopCapacity from '../domain/services/getWorkshopCapacity'
import WorkshopId from '../domain/WorkshopId'

export default class InsertBooking {
  private repository: BookingRepository

  constructor(repository: BookingRepository) {
    this.repository = repository
  }

  public async execute(requestBody: any) {
    const booking = this.parseBody(requestBody)
    const remainingCapacity = await getWorkshopCapacity(booking)
    if (remainingCapacity < booking.getPlaces()) throw new NotEnoughCapacityException('not enough capacity')
    await this.repository.save(booking)
  }

  private parseBody(requestBody: any): Booking {
    return new Booking(
      new CustomerId(requestBody.customerId),
      new Places(requestBody.places),
      new WorkshopId(requestBody.workshopId)
    )
  }
}
