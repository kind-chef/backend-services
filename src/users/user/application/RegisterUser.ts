import Email from '../domain/Email'
import FirstName from '../domain/FirstName'
import LastName from '../domain/LastName'
import PhoneNumber from '../domain/PhoneNumber'
import Profile from '../domain/Profile'
import Secret from '../domain/Secret'
import User from '../domain/User'
import UserRepository from '../domain/UserRepository'

export default class RegisterUser {
  private repository: UserRepository

  constructor(repository: UserRepository) {
    this.repository = repository
  }

  async execute(request: any) {
    const email = new Email(request.email)
    const firstName = new FirstName(request.firstName)
    const lastName = new LastName(request.lastName)
    const phoneNumber = new PhoneNumber(request.phoneNumber)
    const profile = new Profile(request.profile)
    const secret = new Secret(request.secret)
    const user = new User(email, firstName, lastName, phoneNumber, profile, secret)
    return await this.repository.register(user)
  }
}
