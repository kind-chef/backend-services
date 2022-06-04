import KitchenRepository from '../domain/KitchenRepository'
import { model, Schema, connect, Types } from 'mongoose'
import Kitchen from '../domain/Kitchen'
import Capacity from '../domain/Capacity'
import Street from '../domain/Street'
import City from '../domain/City'
import PostalCode from '../domain/PostalCode'
import Province from '../domain/Province'
import Name from '../domain/Name'
import Id from '../domain/Id'
import WorkshopNotFoundException from '../domain/Exceptions/WorkshopNotFoundException'
import ImageUrls from '../domain/ImageUrls'

interface KitchenDocument {
  _id: string
  name: string
  capacity: string
  city: string
  postalCode: string
  province: string
  street: string
  images: Types.Array<string>
  approved: boolean
}

const KitchenSchema = new Schema({
  _id: { type: String, required: true },
  name: { type: String, required: true },
  capacity: { type: Number },
  city: { type: String },
  postalCode: { type: String },
  province: { type: String },
  street: { type: String },
  images: [String],
  approved: { type: Boolean }
})

const kitchenModel = model<KitchenDocument>('Kitchen', KitchenSchema)
const DATABASE_URL = 'mongodb://kindchef:S3cret@mongo:27017/test?authSource=admin&w=1'

export default class KitchenMongoRepository implements KitchenRepository {
  async find(id: Id): Promise<Kitchen> {
    await connect(DATABASE_URL)
    try {
      const unformattedWorkshop = await kitchenModel.findById(id.getValue())
      const workshop = this.parseDocumentToWorkshop(unformattedWorkshop as KitchenDocument)
      return Promise.resolve(workshop)
    } catch (e) {
      throw new WorkshopNotFoundException('Model not found')
    }
  }

  async save(workshop: Kitchen) {
    await connect(DATABASE_URL)

    const workshopMongo = await new kitchenModel({
      _id: workshop.getId(),
      name: workshop.getName(),
      capacity: workshop.getCapacity(),
      city: workshop.getCity(),
      postalCode: workshop.getPostalCode(),
      province: workshop.getProvince(),
      street: workshop.getStreet(),
      images: workshop.getImages(),
      approved: workshop.getApproved()
    })

    try {
      await workshopMongo.save()
    } catch (e: any) {
      console.error(e)
    }
  }

  async findAll(): Promise<Kitchen[]> {
    await connect(DATABASE_URL)
    const filter = { approved: false }
    const unformattedWorkshops = await kitchenModel.find(filter)
    const workshops = unformattedWorkshops.map((value: KitchenDocument) => {
      return this.parseDocumentToWorkshop(value)
    })
    return Promise.resolve(workshops)
  }

  delete(): void {
    throw new Error('Method not implemented.')
  }

  private parseDocumentToWorkshop(workshopDocument: KitchenDocument) {
    return new Kitchen(
      new Id(String(workshopDocument._id)),
      new Name(String(workshopDocument.name)),
      new Street(String(workshopDocument.street)),
      new City(String(workshopDocument.city)),
      new PostalCode(String(workshopDocument.postalCode)),
      new Province(String(workshopDocument.province)),
      new Capacity(Number(workshopDocument.capacity)),
      new ImageUrls(workshopDocument.images)
    )
  }

  async approve(id: Id): Promise<Boolean> {
    await connect(DATABASE_URL)
    const filter = { _id: id.getValue() }
    const update = { approved: true }
    await kitchenModel.findOneAndUpdate(filter, update)
    return Promise.resolve(true)
  }
}
