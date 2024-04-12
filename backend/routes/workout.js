const express=require('express')
const router=express.Router();
const{createWorkout,getWorkout,getSingleWorkout, deleteWorkout, updateWorkout}=require('../controller/workoutcontroller')
//get all workout
router.get('/',getWorkout)

//get single workout
router.get('/:id',getSingleWorkout)

//create workout
router.post('/',createWorkout)

//delete workout
router.delete('/:id',deleteWorkout)

//update workout
router.patch('/:id',updateWorkout)

module.exports=router;