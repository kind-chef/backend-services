import Booking from './Booking'

export default interface BookingRepository {
  save(booking: Booking): void
}
