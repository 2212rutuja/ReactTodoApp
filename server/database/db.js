//pasword-6KDJLccF4sTNxFwr
//mongodb+srv://rutujabhagate22:6KDJLccF4sTNxFwr@cluster0.s6fpma0.mongodb.net/

import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()
const USERNAME = process.env.DB_USERNAME
const PASSWORD = process.env.DB_PASSWORD


export const Connection =()=>{
    const URL = `mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.s6fpma0.mongodb.net/`
    mongoose.connect(URL)
    mongoose.connection.on('connected',()=>{   //connected and disconnected are the inbult function
        console.log("MongoDb connected sucessfully")
    })
    mongoose.connection.on('disconnected',()=>{
        console.log("MongoDb disconnected")
    })
    mongoose.connection.on('error',()=>{
        console.log("Error while connecting database", error.message)
    })

}