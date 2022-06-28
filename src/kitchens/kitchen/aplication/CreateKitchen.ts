import Kitchen from '../domain/Kitchen'
import KitchenRepository from '../domain/KitchenRepository'
import writeFyles from '../../../global/application/WriteFiles'
import KitchenCreatedEvent from '../domain/KitchenCreatedEvent'
import RabbitMqEventPublisher from '../../../global/application/RabbitMqEventPublisher'
import ParseJSONToKitchen from './Parsers/ParseJSONToKitchen'

const QUEUE_NAME = 'notify_kitchen_created'
export default class CreateKitchen {
  private KitchenRepository: KitchenRepository

  constructor(KitchenRepository: KitchenRepository) {
    this.KitchenRepository = KitchenRepository
  }

  async createKitchen(requestBody: any) {
    const writer = new writeFyles()
    await writer.execute(requestBody.images)
    const kitchen = this.parseKitchen(requestBody)
    await this.registerKitchen(kitchen)
    await this.sendNotification(kitchen)
  }

  private parseKitchen(requestBody: any): Kitchen {
    const parser = new ParseJSONToKitchen()
    return parser.execute(requestBody)
  }

  private async registerKitchen(kitchen: Kitchen) {
    await this.KitchenRepository.save(kitchen)
  }

  private async sendNotification(kitchen: Kitchen) {
    const event = new KitchenCreatedEvent(kitchen)
    const publisher = new RabbitMqEventPublisher()
    await publisher.publishEvent(event, QUEUE_NAME)
  }
}
