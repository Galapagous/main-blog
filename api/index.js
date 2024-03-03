import express from "express";
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import userRoute from './routes/user.route.js'
import authRoute from './routes/auth.route.js'


dotenv.config()
const app = express()
app.use(express.json())
const port = process.env.PORT || 3001


// -----connecting to the database-------
const connectToDatabase = ()=>{
    try {
        mongoose.connect('mongodb://localhost:27017/fullblog').then(()=>{
            console.log('connected to database')
        })
    } catch (error) {
        console.log({error})
    }
}

console.log(process.env.PORT, process.env.MONGOURL)

app.listen(port, ()=>{
    console.log(`server listening on port ${port}`)
    connectToDatabase()
})



app.use('/api/user',userRoute)
app.use('/api/auth',authRoute)