import Workshop from './Workshop'

export default interface WorkshopRepository {
  insert(workshop: Workshop): Promise<Boolean>
}
