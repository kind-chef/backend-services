import Id from './Id'
import Kitchen from './Kitchen'

export default interface KitchenRepository {
  save(kitchen: Kitchen): void
  findAll(): Promise<Kitchen[]>
  find(id: Id): Promise<Kitchen>
  approve(id: Id): Promise<boolean>
  delete(): void
}
