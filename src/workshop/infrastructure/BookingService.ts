import UserId from '../domain/UserId'
import axios from 'axios'
import Id from '../domain/Id'
export default class BookingService {
  public async getBookings(userId: UserId): Promise<Id[]> {
    const id = userId.getValue()
    const callout: any = await axios.get(`http://localhost:8090/bookings/${id}`)
    const result: Id[] = callout.data.map((booking: any) => new Id(booking.workshop_id))
    return result
  }
}
