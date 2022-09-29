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
     const userId = JSON.parse(localStorage.getItem("user"))._id
    
     const data = await fetch("http://localhost:5000/addProduct",{
      method:"post",
      body:JSON.stringify({name,brand,price,category,userId}),
      headers:{
        "Content-Type":"application/json"
      }
     })

     const result = await data.json();
     console.log(result)
      }
  return (
    <div className={add.addProductDiv}>
     <h1>Add Product</h1>
     <input type="text"  placeholder='product name' value={name} onChange={(e)=>setName(e.target.value)}/>
     <input type="text" placeholder='product brand' value={brand} onChange={(e)=>setBrand(e.target.value)}/>
     <input type="text" placeholder='product price' value={price} onChange={(e)=>setPrice(e.target.value)}/>
     <input type="text" placeholder='product category' value={category} onChange={(e)=>setCategory(e.target.value)}/>
     <button onClick={handleAddProductFun}>Add Product</button>
    </div>
  )
}

export default AddProduct
