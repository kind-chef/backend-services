import { WorkshopModel } from './WorkshopModel'

export default interface WorkShopModelRepository {
  save(workshop: WorkshopModel): void
  find(): void
  delete(): void
}
