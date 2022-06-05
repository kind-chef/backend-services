import express from 'express'
import Kitchen from './kitchens/kitchen/infrastructure/controllers/CreateKitchenController'
import getAllKitchens from './kitchens/kitchen/infrastructure/controllers/FindKitchensToApproveController'
import approveKitchen from './kitchens/kitchen/infrastructure/controllers/ApproveController'
import registerUser from './users/user/infrastructure/RegisterUserController'
import login from './users/user/infrastructure/LoginController'
import { createServer } from 'https'
import { readFileSync } from 'fs'
import findWorkShop from './kitchens/kitchen/infrastructure/controllers/FindController'
import path from 'path'
const port = 8090
const app = express()
app.use(express.json({ limit: '50mb' }))
app.use(express.static(path.join(__dirname, 'assets')))

const key = readFileSync('./certificates/keyrsa.pem')
const cert = readFileSync('./certificates/cert.pem')

app.post('/registerUser', registerUser)

app.post('/login', login)

app.post('/', Kitchen)

app.get('/getall', getAllKitchens)

app.get('/kitchen/:kitchenId', findWorkShop)

app.post('/approve-kitchen/:kitchenId', approveKitchen)

const server = createServer({ key, cert }, app)

server.listen(8090, () => {
  console.log('Server is listening on port ' + port)
})
