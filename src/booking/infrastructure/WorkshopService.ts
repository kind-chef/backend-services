import axios from 'axios'
import Booking from '../domain/Booking'

export default class WorkshopService {
  async getWorkshopCapacity(booking: Booking): Promise<number> {
    const workshopId = booking.getWorkshopId()
    const callout: any = await axios.get(`http://localhost:8090/workshop/${workshopId}`)
    return callout.data.remainingCapacity
  }
}
