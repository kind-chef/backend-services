import Id from './Id'
import { WorkshopModel } from './WorkshopModel'

export default interface WorkShopModelRepository {
  save(workshop: WorkshopModel): void
  findAll(): Promise<WorkshopModel[]>
  find(id: Id): Promise<WorkshopModel>
  delete(): void
}
