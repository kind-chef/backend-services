import Address from './Street'
import Capacity from './Capacity'
import City from './City'
import Name from './Name'
import PostalCode from './PostalCode'
import Province from './Province'
import Street from './Street'

export class WorkshopModel {
  private capacity: Capacity
  private street: Street
  private city: City
  private postCode: PostalCode
  private province: Province
  private name: Name

  constructor(capacity: Capacity, street: Street, city: City, postCode: PostalCode, province: Province, name: Name) {
    this.capacity = capacity
    this.street = street
    this.city = city
    this.postCode = postCode
    this.province = province
    this.name = name
  }

  public getName() {
    return this.name.getValue()
  }

  public getProvince() {
    return this.province.getValue()
  }

  public getPostalCode() {
    return this.postCode.getValue()
  }

  public getCity() {
    return this.city.getValue()
  }

  public getStreet() {
    return this.street.getValue()
  }

  public getCapacity() {
    return this.capacity.getValue()
  }
}
