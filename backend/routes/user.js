const express=require('express')
const router=express.Router()
const {getUser,createUser}=require('../controller/userController')

router.post('/signup',createUser)

router.post('/login',getUser)

module.exports=router;