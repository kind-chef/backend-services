import express from 'express'
import workshopModel from './workshops/workshop-model/infrastructure/CreateWorkshopModelController'
import getAllWorkshopModels from './workshops/workshop-model/infrastructure/FindAllWorkshopModelController'
import registerUser from './users/user/infrastructure/RegisterUserController'
import login from './users/user/infrastructure/LoginController'

const port = 8090
const app = express()
app.use(express.json())

app.listen(port, () => {
  console.log(`[App]: Listening on port ${port}`)
})

app.post('/registerUser', registerUser)

app.post('/login', login)

app.post('/', workshopModel)

app.get('/getall', getAllWorkshopModels)
