import express from 'express'
import workshopModel from './workshops/workshop-model/infrastructure/controllers/CreateWorkshopModelController'
import getAllWorkshopModels from './workshops/workshop-model/infrastructure/controllers/FindAllWorkshopModelController'
import approveKitchen from './workshops/workshop-model/infrastructure/controllers/ApproveController'
import registerUser from './users/user/infrastructure/RegisterUserController'
import login from './users/user/infrastructure/LoginController'
import { createServer } from 'https'
import { readFileSync } from 'fs'
import findWorkShop from './workshops/workshop-model/infrastructure/controllers/FindController'

const port = 8090
const app = express()
app.use(express.json())

const key = readFileSync('./certificates/keyrsa.pem')
const cert = readFileSync('./certificates/cert.pem')

app.post('/registerUser', registerUser)

app.post('/login', login)

app.post('/', workshopModel)

app.get('/getall', getAllWorkshopModels)

app.get('/kitchen/:kitchenId', findWorkShop)

app.post('/approve-kitchen/:kitchenId', approveKitchen)

const server = createServer({ key, cert }, app)

server.listen(8090, () => {
  console.log('Server is listening on port ' + port)
})
