import client, { Connection, Channel } from 'amqplib'
import BookingCreatedEvent from '../domain/BookingCreatedEvent'

export default class RabbitMqEventPublisher {
  public async publishEvent(event: BookingCreatedEvent) {
    const connection: Connection = await client.connect('amqp://guest:guest@rabbitmq:5672/kindhost')
    const channel: Channel = await connection.createChannel()
    await channel.assertQueue('notify_book_created')
    channel.sendToQueue('notify_book_created', Buffer.from(event.getContent()))
  }
}
