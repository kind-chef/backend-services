import Address from './Address'
import Capacity from './Capacity'
import City from './City'
import Name from './Name'
import PostalCode from './PostalCode'
import Province from './Province'

export class WorkshopModel {
  private capacity: Capacity
  private address: Address
  private city: City
  private postCode: PostalCode
  private province: Province
  private name: Name

  public WorkshopModel(
    capacity: Capacity,
    address: Address,
    city: City,
    postCode: PostalCode,
    province: Province,
    name: Name
  ) {
    this.capacity = capacity
    this.address = address
    this.city = city
    this.postCode = postCode
    this.province = province
    this.name = name
  }
}
