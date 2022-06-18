import Id from '../domain/Id'
import RemainingCapacity from './RemainingCapacity'
import Workshop from './Workshop'

export default interface WorkshopRepository {
  insert(workshop: Workshop): Promise<Boolean>
  getUnassignedWorkshops(): Promise<any>
  find(id: Id): Promise<any>
  assign(workshopId: Id, userId: string): void
  updateCapacity(workshopId: Id, remainingCapacity: RemainingCapacity): void
}
