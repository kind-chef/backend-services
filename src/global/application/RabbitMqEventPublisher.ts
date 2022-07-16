import client, { Connection, Channel } from 'amqplib'
import DomainEvent from '../domain/DomainEvent'

export default class RabbitMqEventPublisher {
  public async publishEvent(event: DomainEvent, queueName: string) {
    const connection: Connection = await client.connect('amqp://guest:guest@kind-rabbitmq:5672/kindhost')
    const channel: Channel = await connection.createChannel()
    await channel.assertQueue(queueName)
    channel.sendToQueue(queueName, Buffer.from(event.getContent()))
  }
}
