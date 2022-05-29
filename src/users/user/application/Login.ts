import Email from '../domain/Email'
import Secret from '../domain/Secret'
import UserRepository from '../domain/UserRepository'

export default class Login {
  private repository: UserRepository

  constructor(repository: UserRepository) {
    this.repository = repository
  }

  public execute(requestBody: any) {
    const email = new Email(requestBody.email)
    const secret = new Secret(requestBody.secret)
    return this.repository.login(email, secret)
  }
}
