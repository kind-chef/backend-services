import WorkShopModelRepository from '../domain/WorkshopModelRepository'
import { model, Schema, connect } from 'mongoose'
import { WorkshopModel } from '../domain/WorkshopModel'
import Capacity from '../domain/Capacity'
import Street from '../domain/Street'
import City from '../domain/City'
import PostalCode from '../domain/PostalCode'
import Province from '../domain/Province'
import Name from '../domain/Name'

interface WorkShopModelDocument {
  name: string
  capacity: string
  city: string
  postalCode: string
  province: string
  street: string
}

const workShopModelSchema = new Schema({
  name: { type: String, required: true },
  capacity: { type: Number },
  city: { type: String },
  postalCode: { type: String },
  province: { type: String },
  street: { type: String }
})

const workshopModel = model<WorkShopModelDocument>('WorkShopModel', workShopModelSchema)

export default class WorkShopModelMongoRepository implements WorkShopModelRepository {
  async save(workshop: WorkshopModel) {
    await connect('mongodb://kindchef:S3cret@mongo:27017/test?authSource=admin&w=1')

    const workshopMongo = await new workshopModel({
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
    await connect('mongodb://kindchef:S3cret@mongo:27017/test?authSource=admin&w=1')
    const unformattedWorkshops: WorkShopModelDocument[] = await workshopModel.find()
    const workshops = unformattedWorkshops.map((value: WorkShopModelDocument) => {
      return new WorkshopModel(
        new Capacity(Number(value.capacity)),
        new Street(String(value.street)),
        new City(String(value.city)),
        new PostalCode(String(value.postalCode)),
        new Province(String(value.province)),
        new Name(String(value.name))
      )
    })
    return Promise.resolve(workshops)
  }

  delete(): void {
    throw new Error('Method not implemented.')
  }
}
