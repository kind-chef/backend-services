import express from 'express'
import RegisterUser from '../application/RegisterUser'
import UserRepository from '../domain/UserRepository'
import UserMongoRepository from './UserMongoRepository'

export default async function registerUser(req: express.Request, res: express.Response) {
  const repository: UserRepository = new UserMongoRepository()
  const useCase: RegisterUser = new RegisterUser(repository)
  res.send(await useCase.execute(req.body))
}
