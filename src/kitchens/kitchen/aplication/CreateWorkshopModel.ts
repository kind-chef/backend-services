import Capacity from '../domain/Capacity'
import City from '../domain/City'
import Name from '../domain/Name'
import PostalCode from '../domain/PostalCode'
import Province from '../domain/Province'
import { Kitchen } from '../domain/Kitchen'
import WorkShopModelRepository from '../domain/WorkshopModelRepository'
import Street from '../domain/Street'
import MailEventManager from '../domain/MailEventManager'
import Id from '../domain/Id'
import crypto from 'crypto'
import fs from 'fs'
export default class CreateWorkShopModel {
  private workShopModelRepository: WorkShopModelRepository

  constructor(workShopModelRepository: WorkShopModelRepository) {
    this.workShopModelRepository = workShopModelRepository
  }

  async createWorkShopModel(requestBody: any, mailEventManager: MailEventManager) {
    console.log(requestBody)
    await this.saveFiles(requestBody.images)
    await this.registerKitchen(requestBody, mailEventManager)
  }

  private async saveFiles(files: any[]) {
    let directory = '/kind-chef/src/assets'
    files.forEach(async (file) => {
      let encodedString = file.content.split(',')[1]
      const fileContents = Buffer.from(encodedString, 'base64')
      fs.writeFileSync(`${directory}/${file.name}`, fileContents)
    })
  }

  private async registerKitchen(requestBody: any, mailEventManager: MailEventManager) {
    const workshop = new Kitchen(
      new Id(crypto.randomUUID()),
      new Name(String(requestBody.name)),
      new Street(String(requestBody.street)),
      new City(String(requestBody.city)),
      new PostalCode(String(requestBody.postalCode)),
      new Province(String(requestBody.province)),
      new Capacity(Number(requestBody.capacity))
    )
    await this.workShopModelRepository.save(workshop)
    await mailEventManager.sendNotification(['perepadial@gmail.com'])
  }
}