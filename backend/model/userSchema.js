const moogoose=require('mongoose')
const bcrypt=require('bcrypt')
const schema=moogoose.Schema
const userSchema=new schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,

    }
})
//static signup method
userSchema.statics.signup=async function(email,password){
    const exist=await this.findOne(email)
    if(exist){
        throw Error('email already Registered.')
    }
    
    const salt=await bcrypt.genSalt(10)
    const hash= bcrypt.hash(password, salt)
    const data=await this.create({email,password:hash})
    return data
    
    
    
}

const User=moogoose.model('User',userSchema)
module.exports=User