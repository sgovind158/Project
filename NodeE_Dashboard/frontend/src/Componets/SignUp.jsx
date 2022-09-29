import React, { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import signUp from "./StyleComponets/signup.module.css"
const SignUp = () => {
    const [name ,setName] = useState("")
    const [email ,setEmail] = useState("")
    const [password ,setPassword] = useState("")
    const navigate = useNavigate()

    useEffect(()=>{
        const auth = localStorage.getItem("user")
        if(auth){
            navigate("/")
        }

    },[navigate])

    const signUpFun = async()=>{
console.log(name,email,password)
   const  data = await fetch("http://localhost:5000/signup",{
    method:"post",
    body:JSON.stringify({name,email,password}),
    headers:{
        "Content-Type":"application/json"
    }
   })

   const result = await data.json()
     localStorage.setItem("user",JSON.stringify(result))
   if(result){
    navigate("/")
   }

    }
  return (
    <div className={signUp.signDiv}>
     <h1>Sign Up</h1>
     <input type="text"  placeholder='name' value={name} onChange={(e)=>setName(e.target.value)}/>
     <input type="text" placeholder='email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
     <input type="password" placeholder='password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
     <button onClick={signUpFun}>Sign Up</button>
    </div>
  )
}

export default SignUp
