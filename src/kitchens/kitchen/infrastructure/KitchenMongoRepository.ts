import KitchenRepository from '../domain/KitchenRepository'
import { model, Schema, connect, Types } from 'mongoose'
import Kitchen from '../domain/Kitchen'
import Capacity from '../domain/Capacity'
import Address from '../../../global/domain/Address'
import PostalCode from '../../../global/domain/PostalCode'
import City from '../../../global/domain/City'
import Province from '../../../global/domain/Province'
import Street from '../../../global/domain/Street'
import Name from '../domain/Name'
import Id from '../domain/Id'
import KitchenNotFoundException from '../domain/Exceptions/KitchenNotFoundException'
import ImageUrls from '../domain/ImageUrls'
import Email from '../domain/Email'
import Phonenumber from '../domain/Phonenumber'

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
  email: string
  phonenumber: string
}

const KitchenSchema = new Schema({
  _id: { type: string, required: true },
  name: { type: string, required: true },
  email: { type: string, required: true },
  phonenumber: { type: string, required: true },
  capacity: { type: number },
  city: { type: string },
  postalCode: { type: string },
  province: { type: string },
  street: { type: string },
  images: [string],
  approved: { type: boolean }
})

const kitchenModel = model<KitchenDocument>('Kitchen', KitchenSchema)
const DATABASE_URL = 'mongodb://kindchef:S3cret@mongo:27017/test?authSource=admin&w=1'

export default class KitchenMongoRepository implements KitchenRepository {
  async find(id: Id): Promise<Kitchen> {
    await connect(DATABASE_URL)
    try {
      const unformattedKitchen = await kitchenModel.findById(id.getValue())
      const kitchen = this.parseDocumentToKitchen(unformattedKitchen as KitchenDocument)
      return Promise.resolve(kitchen)
    } catch (e) {
      throw new KitchenNotFoundException('Model not found')
    }
  }

  async save(kitchen: Kitchen) {
    await connect(DATABASE_URL)

    const kitchenMongo = await new kitchenModel({
      _id: kitchen.getId(),
      name: kitchen.getName(),
      email: kitchen.getEmail(),
      phonenumber: kitchen.getPhonenumber(),
      capacity: kitchen.getCapacity(),
      city: kitchen.getAddress().getCity(),
      postalCode: kitchen.getAddress().getPostalCode(),
      province: kitchen.getAddress().getProvince(),
      street: kitchen.getAddress().getStreet(),
      images: kitchen.getImages(),
      approved: kitchen.getApproved()
    })

    try {
      await kitchenMongo.save()
    } catch (e: any) {
      console.error(e)
    }
  }

  async findAll(): Promise<Kitchen[]> {
    await connect(DATABASE_URL)
    const filter = { approved: false }
    const unformattedKitchens = await kitchenModel.find(filter)
    const kitchens = unformattedKitchens.map((value: KitchenDocument) => {
      return this.parseDocumentToKitchen(value)
    })
    return Promise.resolve(kitchens)
  }

  delete(): void {
    throw new Error('Method not implemented.')
  }

  private parseDocumentToKitchen(kitchenDocument: KitchenDocument) {
    return new Kitchen(
      new Id(String(kitchenDocument._id)),
      new Name(String(kitchenDocument.name)),
      new Email(String(kitchenDocument.email)),
      new Phonenumber(String(kitchenDocument.phonenumber)),
      new Address(
        new Street(String(kitchenDocument.street)),
        new City(String(kitchenDocument.city)),
        new PostalCode(String(kitchenDocument.postalCode)),
        new Province(String(kitchenDocument.province))
      ),
      new Capacity(number(kitchenDocument.capacity)),
      new ImageUrls(kitchenDocument.images)
    )
  }

  async approve(id: Id): Promise<boolean> {
    await connect(DATABASE_URL)
    const filter = { _id: id.getValue() }
    const update = { approved: true }
    await kitchenModel.findOneAndUpdate(filter, update)
    return Promise.resolve(true)
  }
}
