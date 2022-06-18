import Booking from '../domain/Booking'
import BookingRepository from '../domain/BookingRepository'

export default class BookingMongoRepository implements BookingRepository {
  verify(booking: Booking): Boolean {
    throw new Error('Method not implemented.')
  }
  create(booking: Booking): void {
    throw new Error('Method not implemented.')
  }
}
