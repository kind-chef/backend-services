import Address from 'global/domain/Address'
import AssetUrl from './AssetUrl'
import Assigned from './Assigned'
import Capacity from './Capacity'
import Date from './Date'
import Description from './Description'
import Ingredient from './Ingredient'
import KeyWord from './Keyword'
import Name from './Name'
import Price from './Price'
import RemainingCapacity from './RemainingCapavity'

export default class Workshop {
  private name: Name
  private description: Description
  private capacity: Capacity
  private remainingCapacity: RemainingCapacity
  private date: Date
  private price: Price
  private keywords: KeyWord[]
  private ingredients: Ingredient[]
  private assets: AssetUrl[]
  private address: Address
  private assigned: Assigned

  constructor(
    name: Name,
    description: Description,
    capacity: Capacity,
    remainingCapacity: RemainingCapacity,
    date: Date,
    price: Price,
    keywords: KeyWord[],
    ingredients: Ingredient[],
    assets: AssetUrl[],
    address: Address,
    assigned: Assigned
  ) {
    this.name = name
    this.description = description
    this.capacity = capacity
    this.remainingCapacity = remainingCapacity
    this.date = date
    this.price = price
    this.keywords = keywords
    this.ingredients = ingredients
    this.assets = assets
    this.address = address
    this.assigned = assigned
  }
}
