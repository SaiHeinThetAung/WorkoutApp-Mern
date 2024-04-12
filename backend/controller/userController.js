const User=require('../model/userSchema')

const createUser=async(req,res)=>{

        const {email,password}=req.body
        try{
            const data=await User.signup({email,password})
            res.status(200).json(data)
        }
        catch(error){
            res.json({error:error.message})
        }
       
        
}
const getUser=async(req,res)=>{
    res.json({message:'login user'})
 
}
module.exports={createUser,getUser}
