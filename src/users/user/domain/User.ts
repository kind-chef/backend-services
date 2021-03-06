import Email from './Email'
import FirstName from './FirstName'
import LastName from './LastName'
import PhoneNumber from './PhoneNumber'
import Profile from './Profile'
import Secret from './Secret'

export default class User {
  private email: Email
  private firstName: FirstName
  private lastName: LastName
  private phonenumber: PhoneNumber
  private profile: Profile
  private secret: Secret

  constructor(
    email: Email,
    firstName: FirstName,
    lastName: LastName,
    phonenumber: PhoneNumber,
    profile: Profile,
    secret: Secret
  ) {
    this.email = email
    this.firstName = firstName
    this.lastName = lastName
    this.phonenumber = phonenumber
    this.profile = profile
    this.secret = secret
  }

  getEmail(): string {
    return this.email.getValue()
  }

  getFirstName(): string {
    return this.firstName.getValue()
  }

  getLastName(): string {
    return this.lastName.getValue()
  }

  getPhoneNumber(): string {
    return this.phonenumber.getValue()
  }

  getProfile(): string {
    return this.profile.getValue()
  }

  getSecret(): string {
    return this.secret.getValue()
  }
}
