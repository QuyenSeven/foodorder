import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import mongoose from 'mongoose'
import myUserRoute from './routes/myUserRoute'


mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string).then(()=> console.log("Connect to DB"))

const app = express()
app.use(express.json())
app.use(cors())

app.use('/api/my/user',myUserRoute)

app.listen(4000, () =>{
    console.log('server is working in http://localhost:4000');
})