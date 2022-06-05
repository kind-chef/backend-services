import Street from './Street'
import City from './City'
import PostalCode from './PostalCode'
import Province from './Province'

export default class Address {
  private street: Street
  private city: City
  private province: Province
  private postalCode: PostalCode

  constructor(street: Street, city: City, postalCode: PostalCode, province: Province) {
    this.street = street
    this.city = city
    this.province = province
    this.postalCode = postalCode
  }

  public getProvince() {
    return this.province.getValue()
  }

  public getPostalCode() {
    return this.postalCode.getValue()
  }

  public getCity() {
    return this.city.getValue()
  }

  public getStreet() {
    return this.street.getValue()
  }
}
