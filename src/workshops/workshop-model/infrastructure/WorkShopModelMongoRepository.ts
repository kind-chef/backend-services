import WorkShopModelRepository from '../domain/WorkshopModelRepository'
import { model, Schema, connect } from 'mongoose'
import { WorkshopModel } from '../domain/WorkshopModel'
import Capacity from '../domain/Capacity'
import Street from '../domain/Street'
import City from '../domain/City'
import PostalCode from '../domain/PostalCode'
import Province from '../domain/Province'
import Name from '../domain/Name'
import Id from '../domain/Id'
import WorkshopNotFoundException from '../domain/Exceptions/WorkshopNotFoundException'

interface WorkShopModelDocument {
  _id: string
  name: string
  capacity: string
  city: string
  postalCode: string
  province: string
  street: string
}

const workShopModelSchema = new Schema({
  _id: { type: String, required: true },
  name: { type: String, required: true },
  capacity: { type: Number },
  city: { type: String },
  postalCode: { type: String },
  province: { type: String },
  street: { type: String }
})

const workshopModel = model<WorkShopModelDocument>('WorkShopModel', workShopModelSchema)
const DATABASE_URL = 'mongodb://kindchef:S3cret@mongo:27017/test?authSource=admin&w=1'

export default class WorkShopModelMongoRepository implements WorkShopModelRepository {
  async find(id: Id): Promise<WorkshopModel> {
    await connect(DATABASE_URL)
    try {
      const unformattedWorkshop = await workshopModel.findById(id.getValue())
      const workshop = this.parseDocumentToWorkshop(unformattedWorkshop as WorkShopModelDocument)
      return Promise.resolve(workshop)
    } catch (e) {
      throw new WorkshopNotFoundException('Model not found')
    }
  }

  async save(workshop: WorkshopModel) {
    await connect(DATABASE_URL)

    const workshopMongo = await new workshopModel({
      _id: workshop.getId(),
      name: workshop.getName(),
      capacity: workshop.getCapacity(),
      city: workshop.getCity(),
      postalCode: workshop.getPostalCode(),
      province: workshop.getProvince(),
      street: workshop.getStreet()
    })

    try {
      await workshopMongo.save()
    } catch (e: any) {
      console.error(e)
    }

    console.log('Workshop Model created correcty ---> ', workshopMongo.name)
  }

  async findAll(): Promise<WorkshopModel[]> {
    await connect(DATABASE_URL)
    const unformattedWorkshops = await workshopModel.find()
    const workshops = unformattedWorkshops.map((value: WorkShopModelDocument) => {
      return this.parseDocumentToWorkshop(value)
    })
    return Promise.resolve(workshops)
  }

  delete(): void {
    throw new Error('Method not implemented.')
  }

  private parseDocumentToWorkshop(workshopDocument: WorkShopModelDocument) {
    return new WorkshopModel(
      new Id(String(workshopDocument._id)),
      new Name(String(workshopDocument.name)),
      new Street(String(workshopDocument.street)),
      new City(String(workshopDocument.city)),
      new PostalCode(String(workshopDocument.postalCode)),
      new Province(String(workshopDocument.province)),
      new Capacity(Number(workshopDocument.capacity))
    )
  }
}
