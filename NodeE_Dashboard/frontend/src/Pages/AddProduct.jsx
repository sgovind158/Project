import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import add from "./StylePages/addproduct.module.css"
const AddProduct = () => {
  const [name ,setName] = useState("")
  const [brand ,setBrand] = useState("")
  const [price ,setPrice] = useState("")
  const [category ,setCategory] = useState("")
  const navigate = useNavigate()


  const handleAddProductFun = async()=>{
    console.log(name,brand,price,category)
      //  const  data = await fetch("http://localhost:5000/signup",{
      //   method:"post",
      //   body:JSON.stringify({name,email,password}),
      //   headers:{
      //       "Content-Type":"application/json"
      //   }
      //  })
      }
  return (
    <div className={add.addProductDiv}>
     <h1>Sign Up</h1>
     <input type="text"  placeholder='product name' value={name} onChange={(e)=>setName(e.target.value)}/>
     <input type="text" placeholder='product brand' value={brand} onChange={(e)=>setBrand(e.target.value)}/>
     <input type="text" placeholder='product price' value={price} onChange={(e)=>setPrice(e.target.value)}/>
     <input type="text" placeholder='product category' value={category} onChange={(e)=>setCategory(e.target.value)}/>
     <button onClick={handleAddProductFun}>Add Product</button>
    </div>
  )
}

export default AddProduct
