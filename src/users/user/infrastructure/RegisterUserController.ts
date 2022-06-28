import express from 'express'
import RegisterUser from '../application/RegisterUser'
import UserRepository from '../domain/UserRepository'
import UserMongoRepository from './UserMongoRepository'

export default async function registerUser(req: express.Request, res: express.Response) {
  const repository: UserRepository = new UserMongoRepository()
  const useCase: RegisterUser = new RegisterUser(repository)
  try {
    const result = await useCase.execute(req.body)
    res.send(result)
  } catch (e: any) {
    res.status(400)
    res.send(e.message)
  }
}
