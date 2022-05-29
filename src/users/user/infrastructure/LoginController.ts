import express from 'express'
import Login from '../application/Login'
import UserRepository from '../domain/UserRepository'
import UserMongoRepository from './UserMongoRepository'

export default async function registerUser(req: express.Request, res: express.Response) {
  const repository: UserRepository = new UserMongoRepository()
  const useCase: Login = new Login(repository)
  const result = await useCase.execute(req.body)
  !result ? (res.statusCode = 401) : (res.statusCode = 201)
  res.send(result)
}
