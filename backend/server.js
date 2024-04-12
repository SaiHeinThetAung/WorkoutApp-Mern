const express=require('express')
const mongoose=require('mongoose')
require('dotenv').config()
const app=express()
app.use(express.json())

const cors=require("cors");
const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}
app.use(cors(corsOptions))

const workout=require('./routes/workout')
const user=require('./routes/user')
mongoose.connect(process.env.DB)
.then(console.log('connected to database'))
.catch(error=>console.log(error))
app.use('/api/user/',user)
app.use('/api/workout',workout);

app.listen(process.env.PORT,()=>{
    console.log('listening on port 4000')
})