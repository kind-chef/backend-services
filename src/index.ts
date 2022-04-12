import express from 'express'
import workshopModel from './workshops/workshop-model/infrastructure/CreateWorkshopModelController'

const port = 8090
const app = express()

app.listen(port, () => {
  console.log(`[App]: Listening on port ${port}`)
})

app.get('/', workshopModel)
