import WorkShopModelRepository from '../domain/WorkshopModelRepository'
import { model, Schema, Document, connect } from 'mongoose'

interface WorkShopModelDocument {
  name: string
}

const workShopModelSchema = new Schema({
  name: { type: String, required: true }
})

const workShopModel = model<WorkShopModelDocument>('WorkShopModel', workShopModelSchema)

export default class WorkShopModelMongoRepository implements WorkShopModelRepository {
  async save() {
    await connect('mongodb://kindchef:S3cret@mongo:27017/test?authSource=admin&w=1')
    /**
     * Workshop Fields
     * Name
     * Address
     * City
     * PostalCode
     * Capacity
     *
     */
    const workshopModel = await new workShopModel({
      name: 'workshopmodeltest'
    })

    try {
      await workshopModel.save()
    } catch (e: any) {
      console.error(e)
    }

    console.log('Workshop Model created correcty ---> ', workshopModel.name)
  }

  find(): void {
    throw new Error('Method not implemented.')
  }

  delete(): void {
    throw new Error('Method not implemented.')
  }
}
