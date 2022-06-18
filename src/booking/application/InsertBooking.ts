import Booking from '../domain/Booking'
import BookingCreatedEvent from '../domain/BookingCreatedEvent'
import BookingRepository from '../domain/BookingRepository'
import CustomerId from '../domain/CustomerId'
import NotEnoughCapacityException from '../domain/NotEnoughCapacityException'
import Places from '../domain/Places'
import getWorkshopCapacity from '../domain/services/getWorkshopCapacity'
import WorkshopId from '../domain/WorkshopId'
import RabbitMqEventPublisher from './RabbitMqEventPublisher'

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
    await this.publishEvent(requestBody)
  }

  private async publishEvent(requestBody: any) {
    const event = new BookingCreatedEvent(JSON.stringify(requestBody))
    const publisher = new RabbitMqEventPublisher()
    await publisher.publishEvent(event)
  }

  private parseBody(requestBody: any): Booking {
    return new Booking(
      new CustomerId(requestBody.customerId),
      new Places(requestBody.places),
      new WorkshopId(requestBody.workshopId)
    )
  }
}
