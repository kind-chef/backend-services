import express from 'express'
import Kitchen from './kitchens/kitchen/infrastructure/controllers/CreateKitchenController'
import getAllKitchens from './kitchens/kitchen/infrastructure/controllers/FindKitchensToApproveController'
import approveKitchen from './kitchens/kitchen/infrastructure/controllers/ApproveController'
import registerUser from './users/user/infrastructure/RegisterUserController'
import insertWorkshop from './workshop/infrastructure/controllers/InsertWorkshopController'
import login from './users/user/infrastructure/LoginController'
import findKitchen from './kitchens/kitchen/infrastructure/controllers/FindController'
import path from 'path'
import unassignedWorkshopsController from './workshop/infrastructure/controllers/UnassignedWorkshopsController'
import findWorkshop from './workshop/infrastructure/controllers/FindWorkshopController'
import assignWorkshop from './workshop/infrastructure/controllers/AssignWorkshopController'
import insertBooking from './booking/infrastructure/InsertBookingController'
import updateCapacityOnBookingCreatedSubscriber from './workshop/infrastructure/UpdateCapacityOnBookingCreatedSubscriber'
import UpdateCapacity from './workshop/application/UpdateCapacity'
import WorkshopMongoRepository from './workshop/infrastructure/WorkshopMongoRepository'
import activeWorkshopController from './workshop/infrastructure/controllers/ActiveWorkshopController'
import getBookingsController from './booking/infrastructure/GetBookingsController'
import bookedWorkshopController from './workshop/infrastructure/controllers/BookedWorshopController'
import cors from 'cors'
import sendNotificationOnKitchenCreated from './users/user/infrastructure/SendNotificationOnKitchenCreated'
import NotifyAdmins from './users/user/application/NotifyAdmins'
import UserMongoRepository from './users/user/infrastructure/UserMongoRepository'
import NodeMailerEventManager from './global/infrastructure/NodeMailerEventManager'

const allowedOrigins = ['127.0.0.1:8090', '127.0.0.1:3000', 'http://localhost:3000', 'http://localhost:8090']


const port = 8090
const app = express()
app.use(express.json({ limit: '50mb' }))

app.use(express.static(path.join(__dirname, 'assets')))


const options: cors.CorsOptions = {
  allowedHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Accept', 'X-Access-Token'],
  credentials: true,
  methods: 'GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE',
  origin: allowedOrigins,
  preflightContinue: false
}
app.use(cors(options))

app.post('/register-user', registerUser)

app.post('/login', login)

app.post('/register-kitchen', Kitchen)

app.get('/unapproved-kitchens', getAllKitchens)

app.get('/kitchen/:kitchenId', findKitchen)

app.post('/approve-kitchen/:kitchenId', approveKitchen)

app.post('/register-workshop', insertWorkshop)

app.get('/unassigned-workshops', unassignedWorkshopsController)

app.get('/workshop/:workshopId', findWorkshop)

app.post('/assign-workshop', assignWorkshop)

app.post('/register-booking', insertBooking)

app.get('/active-workshops', activeWorkshopController)

app.get('/bookings/:userId', getBookingsController)

app.get('/booked-workshop/:userId', bookedWorkshopController)

updateCapacityOnBookingCreatedSubscriber(new UpdateCapacity(new WorkshopMongoRepository()))

sendNotificationOnKitchenCreated(new NotifyAdmins(new UserMongoRepository(), new NodeMailerEventManager()))

app.listen(8090, () => {
  console.log('Server is listening on port ' + port)
})
