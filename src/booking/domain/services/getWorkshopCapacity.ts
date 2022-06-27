import Booking from '../Booking'
import axios from 'axios'
import https from 'https'
// theFileYouDeclaredTheCustomConfigIn.ts

export default async function getWorkshopCapacity(booking: Booking): Promise<number> {
  const workshopId = booking.getWorkshopId()
  const callout: any = await axios.get(`http://localhost:8090/workshop/${workshopId}`)
  return callout.data.capacity
}
