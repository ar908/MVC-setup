 const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const dotenv = require('dotenv')
const colors = require('colors')
// const mongoose = require('mongoose');
const connectDb = require('./config/connectDb')
const userModel= require('./routes/userRoute')

// Config dotenv file
dotenv.config();

//database call
connectDb();

// userModel()
 // rest object
 const app = express()
 //middlewares 
 app.use(morgan('dev'))
 app.use(express.json())
 app.use(cors())

// routes
// app.get('/',(req,res)=>{
//     res.send("<h1>hello from server</h1>") ;

// });
app.use('/api/v1/users',require('./routes/userRoute'));

// transection routes
app.use('/api/v1/transections',require('./routes/transectionRoutes'))
//port 
const PORT = 8080||process.env.PORT;

//listen server
app.listen(PORT,()=>{

   console.log(`Server running on port ${PORT}`);
   
    
})
