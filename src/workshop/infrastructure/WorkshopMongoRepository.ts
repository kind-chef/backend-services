import { model, Schema, connect, Types } from 'mongoose'
import WorkshopNotFound from '../domain/exceptions/WorkshopNotFound'
import Id from '../domain/Id'
import Workshop from '../domain/Workshop'
import WorkshopRepository from '../domain/WorkshopRepository'

interface WorkhopDocument {
  _id: string
  name: string
  description: string
  capacity: number
  remainingCapacity: number
  date: Date
  price: number
  keywords: Types.Array<string>
  ingredients: string
  images: Types.Array<string>
  videoUrl: string
  assigned: boolean
  city: string
  postalCode: string
  province: string
  street: string
}

const WorkshopSchema = new Schema({
  _id: { type: String, required: true },
  name: { type: String, required: true },
  description: { type: String },
  capacity: { type: Number, required: true },
  remainingCapacity: { type: Number, required: true },
  date: { type: Date, required: true },
  price: { type: Number },
  keywords: { type: [String] },
  ingredients: { type: String },
  images: { type: [String] },
  assigned: { type: Boolean },
  city: { type: String, required: true },
  postalCode: { type: String, required: true },
  province: { type: String, required: true },
  street: { type: String, required: true },
  videoUrl: { type: String }
})

const workshopModel = model<WorkhopDocument>('workshop', WorkshopSchema)
const DATABASE_URL = 'mongodb://kindchef:S3cret@mongo:27017/test?authSource=admin&w=1'

export default class WorkshopMongoRepository implements WorkshopRepository {
  async insert(workshop: Workshop): Promise<Boolean> {
    await connect(DATABASE_URL)
    const document = this.parseWorkshopToDocument(workshop)
    const result = await document.save()
    return !!result
  }

  private parseWorkshopToDocument(workshop: Workshop): any {
    return new workshopModel({
      _id: workshop.getId(),
      name: workshop.getName(),
      description: workshop.getDescription(),
      capacity: workshop.getCapacity(),
      remainingCapacity: workshop.getRemainingCapacity(),
      date: workshop.getDate(),
      price: workshop.getPrice(),
      keywords: workshop.getKeyWordsStringList(),
      ingredients: workshop.getIngredients(),
      images: workshop.getImageUrls(),
      assigned: workshop.getAssigned(),
      city: workshop.getAddress().getCity(),
      postalCode: workshop.getAddress().getPostalCode(),
      province: workshop.getAddress().getProvince(),
      street: workshop.getAddress().getStreet(),
      videoUrl: workshop.getVideoUrl()
    })
  }

  async getUnassignedWorkshops(): Promise<any> {
    await connect(DATABASE_URL)
    const filter = { assigned: false, date: { $gte: new Date() } }
    const result = await workshopModel.find(filter).select('name description images')
    return Promise.resolve(result)
  }

  async find(id: Id): Promise<any> {
    await connect(DATABASE_URL)
    const workshopId = id.getValue()
    const workshop = await workshopModel.findById(workshopId)
    if (!workshop) throw new WorkshopNotFound('item not found')
    return Promise.resolve(workshop)
  }
}
