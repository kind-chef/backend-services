import Address from '../../global/domain/Address'
import City from '../../global/domain/City'
import PostalCode from '../../global/domain/PostalCode'
import Province from '../../global/domain/Province'
import Street from '../../global/domain/Street'
import Assigned from '../domain/Assigned'
import Capacity from '../domain/Capacity'
import Date from '../domain/Date'
import Description from '../domain/Description'
import Id from '../domain/Id'
import Ingredient from '../domain/Ingredient'
import KeyWord from '../domain/Keyword'
import Name from '../domain/Name'
import Price from '../domain/Price'
import RemainingCapacity from '../domain/RemainingCapacity'
import Workshop from '../domain/Workshop'
import WorkshopRepository from '../domain/WorkshopRepository'
import WriteFyles from '../../global/application/WriteFiles'
import crypto from 'crypto'
import VideoUrl from '../domain/VideoUrl'
import ImageUrls from '../domain/ImageUrls'

export default class Insert {
  repository: WorkshopRepository

  constructor(repository: WorkshopRepository) {
    this.repository = repository
  }

  public async execute(requestBody: any): Promise<Boolean> {
    console.log(requestBody)
    const writer = new WriteFyles()
    writer.execute(requestBody.images)
    const workshop = this.parseWorkshop(requestBody)
    return await this.repository.insert(workshop)
  }

  private parseWorkshop(json: any): Workshop {
    const keywords = json.keywords.map((item: any) => new KeyWord(item))
    return new Workshop(
      new Id(crypto.randomUUID()),
      new Name(json.name),
      new Description(json.description),
      new Capacity(json.capacity),
      new RemainingCapacity(json.remainingCapacity),
      new Date(json.date),
      new Price(json.price),
      keywords,
      new Ingredient(json.ingredients),
      new ImageUrls(json.images.map((image: any) => String(`https://localhost:8090/${image.name}`))),
      new Address(
        new Street(json.street),
        new City(json.city),
        new PostalCode(json.postalCode),
        new Province(json.province)
      ),
      new VideoUrl(json.videoUrl),
      new Assigned(false)
    )
  }
}
