import Booking from '../Booking'
import axios from 'axios'
export default async function getWorkshopCapacity(booking: Booking): Promise<number> {
  const workshopId = booking.getWorkshopId()
  const callout: any = await axios.get(`https://localhost:8090/workshop/${workshopId}`)
  return callout.data.capacity
}
