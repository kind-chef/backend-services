import User from './User'

export default interface UserRepository {
  register(user: User): void
}
