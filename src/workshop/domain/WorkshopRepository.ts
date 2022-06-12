import Id from '../domain/Id'
import Workshop from './Workshop'

export default interface WorkshopRepository {
  insert(workshop: Workshop): Promise<Boolean>
  getUnassignedWorkshops(): Promise<any>
  find(id: Id): Promise<any>
}
