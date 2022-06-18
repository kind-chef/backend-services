import Booking from './Booking'

export default interface BookingRepository {
  verify(booking: Booking): Boolean
  create(booking: Booking): void
}
