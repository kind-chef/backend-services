import DomainEvent from '../../../global/domain/DomainEvent'
import Kitchen from './Kitchen'

export default class KitchenCreatedEvent implements DomainEvent {
  private content: string

  constructor(content: Kitchen) {
    this.content = this.parseKitchen(content)
  }

  private parseKitchen(kitchen: Kitchen): string {
    const content: any = { id: kitchen.getId() }
    return JSON.stringify(content)
  }

  getContent(): string {
    return this.content
  }
}
