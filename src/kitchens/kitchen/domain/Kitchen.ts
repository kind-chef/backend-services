import Address from './Street'
import Capacity from './Capacity'
import City from './City'
import Name from './Name'
import PostalCode from './PostalCode'
import Province from './Province'
import Street from './Street'
import Id from './Id'
import Approved from './Approved'
import ImageUrls from './ImageUrls'

export default class Kitchen {
  private capacity: Capacity
  private street: Street
  private city: City
  private postCode: PostalCode
  private province: Province
  private name: Name
  private id: Id
  private approved: Approved
  private images: ImageUrls
  constructor(
    id: Id,
    name: Name,
    street: Street,
    city: City,
    postCode: PostalCode,
    province: Province,
    capacity: Capacity,
    images: ImageUrls,
    approved: Approved = new Approved(false)
  ) {
    this.capacity = capacity
    this.street = street
    this.city = city
    this.postCode = postCode
    this.province = province
    this.name = name
    this.id = id
    this.approved = approved
    this.images = images
  }

  public getId() {
    return this.id.getValue()
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

  public getApproved() {
    return this.approved.getValue()
  }

  public getImages() {
    return this.images.getValue()
  }
}
