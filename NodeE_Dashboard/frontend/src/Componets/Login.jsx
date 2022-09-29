import React, { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import login from "./StyleComponets/login.module.css"

const Login = () => {
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const navigate = useNavigate()

useEffect(()=>{
let auth = localStorage.getItem("user")
if(auth){
    navigate("/products")
}
},[])

    const handleLoginFun = async()=>{

     let data = await fetch("http://localhost:5000/login",{
        method:"post",
        body:JSON.stringify({email,password}),
        headers:{
            "Content-Type":"application/json"
        }
    })
    let result = await data.json();
   console.log(result.user.name,"what is this ")
     if(result.user.name){
        localStorage.setItem("user",JSON.stringify(result.user))
        localStorage.setItem("token",JSON.stringify(result.auth))
        navigate("/products")
     }else{
        alert("please fill corret detail")
     }
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
