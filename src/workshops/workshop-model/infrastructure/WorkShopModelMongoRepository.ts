import WorkShopModelRepository from '../domain/WorkshopModelRepository'
import { model, Schema, Document, connect } from 'mongoose'
import { WorkshopModel } from '../domain/WorkshopModel'

interface WorkShopModelDocument {
  name: string
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

  find(): void {
    throw new Error('Method not implemented.')
  }

  delete(): void {
    throw new Error('Method not implemented.')
  }
}
