import React, { useState } from 'react'
import './Login.css';
import { PiUserCircleFill } from 'react-icons/pi';

import { RiLockPasswordFill } from 'react-icons/ri';
import { TiTick } from 'react-icons/ti';
import { Link,Navigate } from 'react-router-dom';
import { MdEmail } from 'react-icons/md';
import axios from "axios";



function Login() {
  const[email,setEmail]=useState('');
  const[password,setPassword]=useState('');
  const[redirect,setRedirect]=useState('')

const loginHandler=async(e)=>{
  e.preventDefault()
  try{
    const{data}=await axios.post('http://localhost:4000/login',{email,password},{withCredentials:true})
    alert("login successfull")
    setRedirect(true);
  }catch(error){
    alert("login failed")
  }
}
if(redirect){
  return <Navigate to={"/"}/>
}

  return (
    <div className='log'>
      <div className='heading'> LogIn </div>
        
        <div className='icon'>
         <PiUserCircleFill size={100} color='grey'/>
         </div>
         <div className="main">
         <div className="input">         
          <MdEmail className='icons'/>
        <input type="email" placeholder="email" value={email} onChange={e=>setEmail(e.target.value)}/>
        </div>
        <div className="input">
         <RiLockPasswordFill className='icons'/>
        <input type="password" placeholder="password" value={password} onChange={e=>setPassword(e.target.value)}/>
        </div>
        </div>
        <div className="atr">
   <div className="remember"><TiTick/>
    Remember me</div>
    <div className='forget'>Forget your password?</div>
 </div>
 <div className="loginwrap">
  <button onClick={loginHandler} className='login'>LOGIN</button>
  </div>
  <div className='link'>
  Don't have an account?  <span className='spanclass'><Link to="/signup">SignIn here</Link></span>
</div>

    </div>
  )
}

export default Login