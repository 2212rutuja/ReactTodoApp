import express from 'express'
import { Connection } from './database/db.js'
import cors from 'cors'
import route from './routes/route.js'
import bodyParser from 'body-parser'

const app = express()
const PORT = 8000

app.use(cors())

//app.use(express.json())//for json data ...we can also do using express
app.use(bodyParser.json({extended: true}))       // first parse data n the hit the api
//app.use(express.urlencoded({extended:true}))
app.use(bodyParser.urlencoded({extended:true}))

app.use('/',route)

Connection()

app.listen(PORT, (req,res)=>{
    console.log(`server running on ${PORT}`)
})
