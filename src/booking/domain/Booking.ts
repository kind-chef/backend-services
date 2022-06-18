import CustomerId from './CustomerId'
import Places from './Places'
import WorkshopId from './WorkshopId'

export default class Booking {
  customerId: CustomerId
  places: Places
  workshopId: WorkshopId

  constructor(customerId: CustomerId, places: Places, workshopId: WorkshopId) {
    this.customerId = customerId
    this.places = places
    this.workshopId = workshopId
  }

  public getCustomerId(): string {
    return this.customerId.getValue()
  }

  public getPlaces(): number {
    return this.places.getValue()
  }

  public getWorkshopId(): string {
    return this.workshopId.getValue()
  }
}
