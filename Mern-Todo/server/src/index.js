const express = require('express')
const cors =require('cors')
const { dbConnect } = require('./config/db')
const todo = require('./routes/todoRoute')

require('dotenv').config('')

const app = express()
app.use(express.json())
app.use(cors())
//connect to database 
dbConnect()


app.use('/v1/todo' , todo)



// listen to port 
const port = process.env.PORT || 8000
app.listen(port , ()=>{console.log(`Server running.... ${port}`)})