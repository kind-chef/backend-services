import Booking from '../domain/Booking'
import BookingRepository from '../domain/BookingRepository'
import { model, Schema, connect, Types } from 'mongoose'
import WorkshopService from './WorkshopService'

interface BookingDocument {
  customer_id: string
  workshop_id: string
  places: number
}

const BookingSchema = new Schema({
  customer_id: { type: String, required: true },
  workshop_id: { type: String, required: true },
  places: { type: Number, required: true }
})

const bookingModel = model<BookingDocument>('booking', BookingSchema)
const DATABASE_URL = 'mongodb://kindchef:S3cret@mongo:27017/test?authSource=admin&w=1'

export default class BookingMongoRepository implements BookingRepository {
  async save(booking: Booking): Promise<void> {
    await connect(DATABASE_URL)
    const bookingMongo = new bookingModel({
      customer_id: booking.getCustomerId(),
      workshop_id: booking.getWorkshopId(),
      places: booking.getPlaces()
    })
    await bookingMongo.save()
  }

  async getBookings(userId: string): Promise<any> {
    await connect(DATABASE_URL)
    const filter = { customer_id: userId }
    const result = await bookingModel.find(filter)
    return result
  }

  async getWorkshopCapacity(booking: Booking): Promise<number> {
    const service = new WorkshopService()
    return await service.getWorkshopCapacity(booking)
  }
}
