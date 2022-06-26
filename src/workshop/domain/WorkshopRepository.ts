import Id from '../domain/Id'
import RemainingCapacity from './RemainingCapacity'
import UserId from './UserId'
import Workshop from './Workshop'

export default interface WorkshopRepository {
  insert(workshop: Workshop): Promise<Boolean>
  getUnassignedWorkshops(): Promise<any>
  search(ids: Array<Id>): Promise<any>
  find(id: Id): Promise<any>
  assign(workshopId: Id, userId: string): void
  updateCapacity(workshopId: Id, remainingCapacity: RemainingCapacity): void
  getActiveWorkshops(): Promise<any>
  getBookedWorkshops(userId: UserId): Promise<any>
}
