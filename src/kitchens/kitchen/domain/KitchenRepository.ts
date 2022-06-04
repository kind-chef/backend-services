import Id from './Id'
import Kitchen from './Kitchen'

export default interface KitchenRepository {
  save(workshop: Kitchen): void
  findAll(): Promise<Kitchen[]>
  find(id: Id): Promise<Kitchen>
  approve(id: Id): Promise<Boolean>
  delete(): void
}
