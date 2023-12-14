import React, { useState } from 'react'
import './Signup.css';
import {Link} from "react-router-dom"
import axios from "axios";

import { PiUserCircleFill } from "react-icons/pi";
 import { FaUser } from "react-icons/fa";
 import { CiCalendarDate } from "react-icons/ci";
 import { MdEmail } from "react-icons/md";
 import { RiLockPasswordFill } from "react-icons/ri";



function Signup() {
  const[name,setName ]=useState('');
  const[password,setPassword]=useState('');
  const[email,setEmail]=useState('');
  const[dob,setDob]=useState('');

  const submitHandler=async(e)=>{
    e.preventDefault()
    try{
    await axios.post("http://localhost:4000/signup",{
      name,email,dob,password
    },{
      headers:{
        "Content-Type":'application/json',
      }
    }
    )
    alert("Signed up")
    }catch(error){
    alert("Signup failed.please try again")
    }
  }

  return (
    <div className='signup'>
        <div className='heading'> SIGN IN </div>
        
       <div className='icon'>
        <PiUserCircleFill size={100} color='grey'/>
        </div> 
       <div className="main">
       <div className="input">
        <FaUser className='icons'/>
        <input type="text" placeholder="name" value={name} onChange={e=>setName(e.target.value)}/>
        </div>
        <div className="input">
          <CiCalendarDate className='icons' /> 
         
        <input type="date"  className='clr' value={dob} onChange={e=>setDob(e.target.value)}/>
        </div>
        <div className="input">         
         <MdEmail className='icons'/>
        <input type="email" placeholder="email" value={email} onChange={e=>setEmail(e.target.value)}/>
        </div>

        <div className="input">
         <RiLockPasswordFill className='icons'/>
        <input type="password" placeholder="password" value={password} onChange={e=>setPassword(e.target.value)}/>
        </div>
 </div>
 
 <div className="loginwrap">
  <button onClick={submitHandler} className='login'>SIGNUP</button></div>
  <div className='link'>
  Already have an account? <Link to="/login">Login here</Link>
</div>
 </div>

  )

}

export default Signup


// // #025043
// //#0E6251