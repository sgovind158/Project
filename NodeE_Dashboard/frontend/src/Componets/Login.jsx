import React, { useState } from 'react'
import login from "./StyleComponets/login.module.css"

const Login = () => {
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    
    const handleLoginFun = ()=>{
  console.log(email,password)
    }
  return (
    <div className={login.loginDiv}>
     <h1>Login</h1>
    
     <input type="text" placeholder='email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
     <input type="password" placeholder='password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
     <button onClick={handleLoginFun}>Login</button>
    </div>
  )
}

export default Login
