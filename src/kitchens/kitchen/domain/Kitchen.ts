import Address from '../../../global/domain/Address'
import Capacity from './Capacity'
import Name from './Name'
import Id from './Id'
import Approved from './Approved'
import ImageUrls from './ImageUrls'
import Email from './Email'
import PhoneNumber from './PhoneNumber'

export default class Kitchen {
  private capacity: Capacity
  private address: Address
  private name: Name
  private id: Id
  private approved: Approved
  private images: ImageUrls
  private email: Email
  private phonenumber: PhoneNumber

  constructor(
    id: Id,
    name: Name,
    email: Email,
    phonenumber: PhoneNumber,
    address: Address,
    capacity: Capacity,
    images: ImageUrls,
    approved: Approved = new Approved(false)
  ) {
    this.capacity = capacity
    this.address = address
    this.name = name
    this.id = id
    ;(this.email = email), (this.phonenumber = phonenumber), (this.approved = approved)
    this.images = images
  }

  public getId() {
    return this.id.getValue()
  }

  public getName() {
    return this.name.getValue()
  }

  public getEmail() {
    return this.email.getValue()
  }

  public getPhoneNumber() {
    return this.phonenumber.getValue()
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

  public getAddress(): Address {
    return this.address
  }
}
