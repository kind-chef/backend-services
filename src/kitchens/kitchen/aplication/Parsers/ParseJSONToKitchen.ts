import Kitchen from '../../domain/Kitchen'
import Address from '../../../../global/domain/Address'
import Street from '../../../../global/domain/Street'
import City from '../../../../global/domain/City'
import Province from '../../../../global/domain/Province'
import PostalCode from '../../../../global/domain/PostalCode'
import Id from '../../domain/Id'
import crypto from 'crypto'
import ImageUrls from '../../domain/ImageUrls'
import Email from '../../domain/Email'
import PhoneNumber from '../../domain/PhoneNumber'
import Capacity from '../../domain/Capacity'
import Name from '../../domain/Name'

export default class ParseJSONToKitchen {
  public execute(requestBody: any): Kitchen {
    const urls = requestBody.images.map((image: any) => String(`http://localhost:8090/${image.name}`))
    const address = new Address(
      new Street(String(requestBody.street)),
      new City(String(requestBody.city)),
      new PostalCode(String(requestBody.postalCode)),
      new Province(String(requestBody.province))
    )
    const kitchen = new Kitchen(
      new Id(crypto.randomUUID()),
      new Name(String(requestBody.name)),
      new Email(String(requestBody.email)),
      new PhoneNumber(String(requestBody.phoneNumber)),
      address,
      new Capacity(Number(requestBody.capacity)),
      new ImageUrls(urls)
    )
    return kitchen
  }
}
