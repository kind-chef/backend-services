import Email from './Email'
import FirstName from './FirstName'
import LastName from './LastName'
import Phonenumber from './Phonenumber'
import Profile from './Profile'
import Secret from './Secret'

export default class User {
  private email: Email
  private firstName: FirstName
  private lastName: LastName
  private phonenumber: Phonenumber
  private profile: Profile
  private secret: Secret

  constructor(
    email: Email,
    firstName: FirstName,
    lastName: LastName,
    phonenumber: Phonenumber,
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

  getPhonenumber(): string {
    return this.phonenumber.getValue()
  }

  getProfile(): string {
    return this.profile.getValue()
  }

  getSecret(): string {
    return this.secret.getValue()
  }
}
