import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import prod from "./StylePages/products.module.css"
// get data or table 

const Products = () => {
  const [data,setData] = useState([])
 
  useEffect(()=>{

    if(data.length === 0){
      getDataFun()
    }
   
  },[data])

const getDataFun = async()=>{
  let data = await fetch("http://localhost:5000/products",{
    headers:{
      authorization : JSON.parse(localStorage.getItem("token"))
    }
  })
  let result = await data.json()
   setData(result)
}


const handleDeleteFun = async(id)=>{
   
  let data = await fetch(`http://localhost:5000/product/${id}`,{
       method:"Delete"
  })
  let result = await data.json();

  if(result){
    
    alert("record is delete ")
    getDataFun()
  }
  
}

const handleSearch = async(e)=>{
let key = e.target.value;

if(key){

  let data = await fetch(`http://localhost:5000/search/${key}`)
  let result = await data.json()
  
  setData(result)

}else{
  getDataFun()
}


}
console.log(data)

  return (
    <div>
       {/* <h1>products</h1> */}
       <input  type ="text" placeholder='serch your product' onChange={handleSearch}/>
       <div className={prod.mainDiv}>
       <h1>Id</h1>
        <h1>Name</h1>
        <h1>Brand</h1>
        <h1>Category</h1>
        <h1>Price</h1>
        <h1>Delete</h1>
        <h1>Update</h1>
       
       </div>

       {/* list div */}

       {data.length>0 ? data.map((el,index)=>{
        return(
          <div className={prod.listDiv} key={el._id}>
           <p>{index + 1}</p>
        <p>{el.name}</p>
        <p>{el.brand}</p>
        <p>{el.category}</p>
        <p>$ {el.price}</p>
        <p><button onClick = {()=>handleDeleteFun(el._id)}>Delete</button></p>
       <p> <Link to={`/update/${el._id}`}><button>Update</button></Link></p>
       
        </div>
        )
       }): <h1>Product Not Found</h1>}
       
    </div>
  )
}

export default Products
