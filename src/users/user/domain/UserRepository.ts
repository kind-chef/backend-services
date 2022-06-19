import Email from './Email'
import Secret from './Secret'
import User from './User'

export default interface UserRepository {
  register(user: User): void
  login(email: Email, secret: Secret): Promise<any>
}
