import User from '../domain/User'
import UserRepository from '../domain/UserRepository'
import { model, Schema, connect } from 'mongoose'
import Email from '../domain/Email'
import Secret from '../domain/Secret'

interface UserDocument {
  email: string
  firstName: string
  lastName: string
  phonenumber: string
  profile: string
  secret: string
}

const userSchema = new Schema({
  email: { type: string, required: true, unique: true },
  firstName: { type: string },
  lastName: { type: string, required: true },
  phonenumber: { type: string },
  profile: { type: string, required: true },
  secret: { type: string, required: true }
})

const userModel = model<UserDocument>('Users', userSchema)

export default class UserMongoRepository implements UserRepository {
  async register(user: User) {
    await this.connect()
    const userMongo = await new userModel({
      email: user.getEmail(),
      firstName: user.getFirstName(),
      lastName: user.getLastName(),
      phonenumber: user.getPhonenumber(),
      profile: user.getProfile(),
      secret: user.getSecret()
    })

    await userMongo.save()

    return 'user registered correctly'
  }

  async login(email: Email, secret: Secret): Promise<any> {
    await this.connect()
    const user = await userModel
      .findOne({ email: email.getValue(), secret: secret.getValue() })
      .select('_id email profile')
    return user
  }

  private async connect() {
    return await connect('mongodb://kindchef:S3cret@mongo:27017/test?authSource=admin&w=1')
  }
}
