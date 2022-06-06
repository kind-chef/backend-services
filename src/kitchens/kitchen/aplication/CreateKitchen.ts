import Capacity from '../domain/Capacity'
import Name from '../domain/Name'
import Kitchen from '../domain/Kitchen'
import KitchenRepository from '../domain/KitchenRepository'
import Address from '../../../global/domain/Address'
import Street from '../../../global/domain/Street'
import City from '../../../global/domain/City'
import Province from '../../../global/domain/Province'
import PostalCode from '../../../global/domain/PostalCode'
import MailEventManager from '../domain/MailEventManager'
import Id from '../domain/Id'
import crypto from 'crypto'
import fs from 'fs'
import ImageUrls from '../domain/ImageUrls'
import Email from '../domain/Email'
import PhoneNumber from '../domain/PhoneNumber'
export default class CreateKitchen {
  private KitchenRepository: KitchenRepository

  constructor(KitchenRepository: KitchenRepository) {
    this.KitchenRepository = KitchenRepository
  }

  async createKitchen(requestBody: any, mailEventManager: MailEventManager) {
    console.log(requestBody)
    await this.saveFiles(requestBody.images)
    await this.registerKitchen(requestBody, mailEventManager)
  }

  private async saveFiles(files: any[]) {
    let directory = '/kind-chef/src/assets'
    files.forEach(async (file) => {
      let encodedString = file.split(',')[1]
      const fileContents = Buffer.from(encodedString, 'base64')
      fs.writeFileSync(`${directory}/${file.name}`, fileContents)
    })
  }

  private async registerKitchen(requestBody: any, mailEventManager: MailEventManager) {
    const urls = requestBody.images.map((image: any) => String(`https://localhost:8090/${image.name}`))
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
    await this.KitchenRepository.save(kitchen)
    await mailEventManager.sendNotification(['perepadial@gmail.com'])
  }
}
