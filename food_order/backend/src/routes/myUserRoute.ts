import  express from 'express'
import myUserController from '../controllers/myUserController'

const myUserRoute = express.Router()

myUserRoute.post('/',myUserController.createCurrentUser )
export default myUserRoute