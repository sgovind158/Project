// import express
// import confing file
// import product file
// create app
// post method
const express = require("express");
const cors = require("cors");
require("./db/config");
const UsersModel = require("./db/user");
const productModel = require("./db/product");
const app = express();

app.use(express.json());
app.use(cors());

app.post("/signup", async (req, res) => {
  let data = new UsersModel(req.body);
  let result = await data.save();
 result = result.toObject();
  delete result.password  //  only come email and name not password 
  res.send(result);
});

app.post("/login", async (req, res) => {
  if (req.body.email && req.body.password) {
    // findOne for single search and select for remove password
    let user = await UsersModel.findOne(req.body).select("-password");

    if (user) {
      res.send(user);
    //   console.log("user found",user)
    } else {
        // console.log("user not found ",user)
      res.send({"notFount":"user is not found"});
    }
  } else {
    res.send({"notFount":"please fill all input "});
  }
});


app.post("/addProduct", async (req, res) => {
    let data = new productModel(req.body);
    let result = await data.save();
 
    res.send(result);
  });


  app.get("/products",  async(req,res)=>{

    let result = await productModel.find()

    if(result.length>0){
        res.send(result)
    }else{
        res.send({result:"no result found "})
    }

  })

  // delete product 
  app.delete("/product/:id",async(req,res)=>{

    let result = await productModel.deleteOne({_id:req.params.id})
  
     res.send(result)
  })

  app.get("/product/:id",async(req,res)=>{
   
    let result = await productModel.findOne({_id:req.params.id})
   if(result){
   res.send(result)
   }else{
    res.send({result:"Product not found"})
   }
  })
  
app.listen(5000);
