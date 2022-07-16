import NotifyAdmins from '../application/NotifyAdmins'
import client, { Connection, Channel, ConsumeMessage } from 'amqplib'
const QUEUE_NAME = 'notify_kitchen_created'
const RABBIT_MQ_URL = 'amqp://guest:guest@kind-rabbitmq:5672/kindhost'

export default async function sendNotificationOnKitchenCreated(useCase: NotifyAdmins) {
  const consumer =
    (channel: Channel) =>
    async (msg: ConsumeMessage | null): Promise<void> => {
      if (msg) {
        await useCase.execute(msg.content.toString())
        channel.ack(msg)
      }
    }

  const connection: Connection = await client.connect(RABBIT_MQ_URL)
  const channel: Channel = await connection.createChannel()
  await channel.assertQueue(QUEUE_NAME)
  await channel.consume(QUEUE_NAME, consumer(channel))
}
