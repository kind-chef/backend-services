import { WorkshopModel } from './WorkshopModel'

export default interface WorkShopModelRepository {
  save(workshop: WorkshopModel): void
  findAll(): Promise<WorkshopModel[]>
  delete(): void
}
