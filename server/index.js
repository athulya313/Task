const express=require("express");
const PORT=4000
const cors=require("cors");
const cookieParser=require("cookie-parser");
const mongoose=require("mongoose");
require('dotenv').config();
const User=require("./model/users.js")
const bcrypt=require("bcrypt");
 const jwt=require("jsonwebtoken");


const app=express();

const bcryptSalt=bcrypt.genSaltSync(12)
const jwtSecret="cnsdkjajkllcjajcqaytiquociuyauycolakicuicklajcusiuc"

app.use(cookieParser());
app.use(express.json());

app.use(cors({
    credentials:true,
    origin:'http://localhost:3000',
}))
mongoose.connect(process.env.MONGO_URL);
const db = mongoose.connection;

app.post("/signup",async(req,res)=>{
   const{name,email,dob,password}=req.body;
   try{
    const user=await User.create({name,
        email,
        dob,
    password:bcrypt.hashSync(password,bcryptSalt)}
    )

    res.json(user)
   }catch(error){
     res.status(422).json(error)
   }
})

app.post("/login",async(req,res)=>{
   const {email,password} =req.body;
   const user=await User.findOne({email});

   if(user){
    const passwordcheck=bcrypt.compareSync(password,user.password)
    if(passwordcheck){
          jwt.sign({email:user.email,
            id:user._id
        },jwtSecret,{},(err,token)=>{
            if(err) throw err
            res.cookie('token',token).json(user)
        })  
    }else{
        res.status(422).json("wrong password");
    }
   }else{
    res.status(422).json("user not found");
   }

})
app.get("/users",(req,res)=>{
    const {token}=req.cookies;
    console.log("helloo");
    console.log(token);
    if(token){
        jwt.verify(token,jwtSecret,{},async(err,userData)=>{
            if(err) throw err
            const {name,email,dob,_id}=await User.findbyId(userData.id)
            console.log(name);
            res.json({name,email,dob,_id})

        })
    }else{
        res.json(null);
    }
})
app.listen(PORT,()=>{
    console.log(`server is running on port:${PORT}`);
})
