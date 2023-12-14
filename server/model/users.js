const mongoose=require("mongoose");

const UserSchema=new mongoose.Schema({
    name:String,
    email:{type:String,unique:true},
    dob:Date,
    password:String
})
const UserModel=mongoose.model('Users',UserSchema)
module.exports=UserModel