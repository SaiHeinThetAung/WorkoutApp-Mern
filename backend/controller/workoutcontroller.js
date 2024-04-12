const mogoose=require('mongoose')
const model=require('../model/workoutSchema')

const getWorkout=async(req,res)=>{
    const data=await model.find({})
    if(data){
        res.status(200).json(data)
        //res.send('hello world')
    }
    else{
        return res.status(400).json({error:'no workouts yet'})
    }
}

const getSingleWorkout=async(req,res)=>{
    const id=req.params.id;
    if(!mogoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({error:'no such workout'})
    }
    const data=await model.findById(id)
    if(!data){
        return res.status(404)
    }
    res.status(200).json(data)

}


const createWorkout=async(req,res)=>{
    const {name,load,reps}=req.body;
    const data=await model.create({name,load,reps})
    res.status(200).json(data)

}

const deleteWorkout=async(req,res)=>{
    const id=req.params.id;
    if(!mogoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({error:'no such workout'})
    }
    const data=await model.findOneAndDelete({_id:id})
    if(!data){
        return res.status(404)
    }
    res.status(200).json({mes:'deleted'})

}
const updateWorkout=async(req,res)=>{
    const id=req.params.id;
    // if(!mogoose.Types.ObjectId.isValid(id)){
    //     return res.status(400).json({error:'no such workout'})
    // }
    const data=await model.findOneAndUpdate({_id:id},{...req.body})
    if(!data){
        return res.status(404)
    }
    res.status(200).json(data)

}


module.exports={createWorkout,getSingleWorkout,getWorkout,deleteWorkout,updateWorkout}