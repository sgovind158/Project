import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import add from "./StylePages/addproduct.module.css"
const AddProduct = () => {
  const [name ,setName] = useState("")
  const [brand ,setBrand] = useState("")
  const [price ,setPrice] = useState("")
  const [category ,setCategory] = useState("")
  const [err,setErr] = useState(false)
  const navigate = useNavigate()


  const handleAddProductFun = async()=>{
    console.log(name,brand,price,category)



    if(!name||!brand||!price||!category){
    alert("please fill all detail ")
    setErr(true)
      return false
    }
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
     <input type="text" className={add.addInput}  placeholder='product name' value={name} onChange={(e)=>setName(e.target.value)}/>
     { !name && <span className={add.addInvalid}>Please fill name </span>} 
     {/* {<span className={add.addInvalid}>Please fill name </span>}   */}

     <input type="text" className={add.addInput} placeholder='product brand' value={brand} onChange={(e)=>setBrand(e.target.value)}/>
     { !brand && <span className={add.addInvalid}>Please fill brand </span>} 

     <input type="text" className={add.addInput} placeholder='product price' value={price} onChange={(e)=>setPrice(e.target.value)}/>
     { !price && <span className={add.addInvalid}>Please fill price </span>} 

     <input type="text" className={add.addInput} placeholder='product category' value={category} onChange={(e)=>setCategory(e.target.value)}/>
     { !category && <span className={add.addInvalid}>Please fill category </span>} 

     <button className={add.button} onClick={handleAddProductFun}>Add Product</button>
    </div>
  )
}

export default AddProduct
