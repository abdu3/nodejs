const mongoose=require("mongoose"),
{Schema}=mongoose

const UserSchema =new Schema({
    name:{
        type:String,
        trim:true, /// means take spacess in the parties شيل المسافات التي في الاطراف
        required:true
    },
    age:{
        type:Number,
        trim:true, 
        required:true
    },
    email:{
        type:String,
        trim:true, 
        required:true,
        unique:true
    }
})
module.exports=mongoose.model('User',UserSchema)
