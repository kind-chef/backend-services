import User from '../domain/User'
import UserRepository from '../domain/UserRepository'
import { model, Schema, connect } from 'mongoose'

interface UserDocument {
  email: string
  firstName: string
  lastName: string
  phoneNumber: string
  profile: string
  secret: string
}

const userSchema = new Schema({
  email: { type: String, required: true, unique: true },
  firstName: { type: String },
  lastName: { type: String, required: true },
  phoneNumber: { type: String },
  profile: { type: String, required: true },
  secret: { type: String, required: true }
})

const userModel = model<UserDocument>('Users', userSchema)

export default class UserMongoRepository implements UserRepository {
  async register(user: User) {
    await connect('mongodb://kindchef:S3cret@mongo:27017/test?authSource=admin&w=1')

    const userMongo = await new userModel({
      email: user.getEmail(),
      firstName: user.getFirstName(),
      lastName: user.getLastName(),
      phoneNumber: user.getPhoneNumber(),
      profile: user.getProfile(),
      secret: user.getSecret()
    })

    await userMongo.save()

    console.log('user registered correctly')
  }
}
