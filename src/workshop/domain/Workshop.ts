import Address from '../../global/domain/Address'
import AssetUrl from './ImageUrls'
import Assigned from './Assigned'
import Capacity from './Capacity'
import Date from './Date'
import Description from './Description'
import Id from './Id'
import Ingredient from './Ingredient'
import KeyWord from './Keyword'
import Name from './Name'
import Price from './Price'
import RemainingCapacity from './RemainingCapacity'
import ImageUrls from './ImageUrls'
import VideoUrl from './VideoUrl'

export default class Workshop {
  private id: Id
  private name: Name
  private description: Description
  private capacity: Capacity
  private remainingCapacity: RemainingCapacity
  private date: Date
  private price: Price
  private keywords: KeyWord[]
  private ingredients: Ingredient
  private imageUrls: ImageUrls
  private address: Address
  private assigned: Assigned
  private videoUrl: VideoUrl

  constructor(
    id: Id,
    name: Name,
    description: Description,
    capacity: Capacity,
    remainingCapacity: RemainingCapacity,
    date: Date,
    price: Price,
    keywords: KeyWord[],
    ingredients: Ingredient,
    imageUrls: ImageUrls,
    address: Address,
    videoUrl: VideoUrl,
    assigned: Assigned
  ) {
    this.id = id
    this.name = name
    this.description = description
    this.capacity = capacity
    this.remainingCapacity = remainingCapacity
    this.date = date
    this.price = price
    this.keywords = keywords
    this.ingredients = ingredients
    this.imageUrls = imageUrls
    this.address = address
    this.assigned = assigned
    this.videoUrl = videoUrl
  }

  getId(): string {
    return this.id.getValue()
  }

  getName(): string {
    return this.name.getValue()
  }

  getDescription(): string {
    return this.description.getValue()
  }

  getCapacity(): Number {
    return this.capacity.getValue()
  }

  getRemainingCapacity(): Number {
    return this.remainingCapacity.getValue()
  }

  getDate(): Date {
    return this.date.getValue()
  }

  getPrice(): Number {
    return this.price.getValue()
  }

  getKeyWords(): KeyWord[] {
    return this.keywords
  }

  getKeyWordsStringList(): string[] {
    return this.keywords.map((item) => item.getValue())
  }

  getIngredients(): string {
    return this.ingredients.getValue()
  }

  getImageUrls(): string[] {
    return this.imageUrls.getValue()
  }

  getAddress(): Address {
    return this.address
  }

  getAssigned(): Boolean {
    return this.assigned.getValue()
  }

  getVideoUrl(): string {
    return this.videoUrl.getValue()
  }
}
