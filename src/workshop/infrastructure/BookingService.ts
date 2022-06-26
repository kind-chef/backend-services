import UserId from '../domain/UserId'
import axios from 'axios'
import https from 'https'
import Id from '../domain/Id'
export default class BookingService {
  public async getBookings(userId: UserId): Promise<Id[]> {
    const id = userId.getValue()
    const instance = axios.create({
      httpsAgent: new https.Agent({
        rejectUnauthorized: false
      })
    })
    const callout: any = await instance.get(`https://localhost:8090/bookings/${id}`)
    const result: Id[] = callout.data.map((booking: any) => new Id(booking.workshop_id))
    return result
  }
}
