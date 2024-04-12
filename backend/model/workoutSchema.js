const mongoose=require('mongoose')

const workoutShema=mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    load:{
        type:Number,
        required:true
    },
    reps:{
        type:Number,
        required:true
    }
},{timestamps:true})

const workoutModel=mongoose.model('workout',workoutShema)
module.exports=workoutModel;