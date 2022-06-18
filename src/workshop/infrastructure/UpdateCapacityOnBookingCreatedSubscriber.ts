import client, { Connection, Channel, ConsumeMessage } from 'amqplib'
import UpdateCapacity from '../application/UpdateCapacity'
const QUEUE_NAME = 'notify_book_created'
const RABBIT_MQ_URL = 'amqp://guest:guest@rabbitmq:5672/kindhost'

export default async function updateCapacityOnBookingCreatedSubscriber(useCase: UpdateCapacity) {
  const consumer =
    (channel: Channel) =>
    async (msg: ConsumeMessage | null): Promise<void> => {
      if (msg) {
        console.log(msg.content.toString())
        await useCase.execute(msg.content.toString())
        channel.ack(msg)
      }
    }

  const connection: Connection = await client.connect(RABBIT_MQ_URL)
  const channel: Channel = await connection.createChannel()
  await channel.assertQueue(QUEUE_NAME)
  await channel.consume(QUEUE_NAME, consumer(channel))
}
