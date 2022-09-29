import React, { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import update from "./StylePages/update.module.css"

const UpdateProduct = () => {
  const [name ,setName] = useState("")
  const [brand ,setBrand] = useState("")
  const [price ,setPrice] = useState("")
  const [category ,setCategory] = useState("")
  const {id} = useParams()
  // const [err,setErr] = useState(false)
  // const navigate = useNavigate()

   useEffect(()=>{
  
    getProductData()

   },[])

  const getProductData = async()=>{
  
    let data = await fetch(`http://localhost:5000/product/${id}`)
       let result = await data.json()
       let {name,brand,category,price} = result;
       setName(name)
       setBrand(brand)
       setPrice(price)
       setCategory(category)
  }
    
  const handleUpdateFun = ()=>{
    console.log(name,price,category,brand)

  }

  return (
    <div className={update.addProductDiv}>
    <h1>Update Product</h1>
    <input type="text" className={update.addInput}  placeholder='product name' value={name} onChange={(e)=>setName(e.target.value)}/>
    { !name && <span className={update.addInvalid}>Please fill name </span>} 
    {/* {<span className={add.addInvalid}>Please fill name </span>}   */}

    <input type="text" className={update.addInput} placeholder='product brand' value={brand} onChange={(e)=>setBrand(e.target.value)}/>
    { !brand && <span className={update.addInvalid}>Please fill brand </span>} 

    <input type="text" className={update.addInput} placeholder='product price' value={price} onChange={(e)=>setPrice(e.target.value)}/>
    { !price && <span className={update.addInvalid}>Please fill price </span>} 

    <input type="text" className={update.addInput} placeholder='product category' value={category} onChange={(e)=>setCategory(e.target.value)}/>
    { !category && <span className={update.addInvalid}>Please fill category </span>} 

    <button className={update.button} onClick={handleUpdateFun}>Update Product</button>
   </div>
  )
}

export default UpdateProduct
