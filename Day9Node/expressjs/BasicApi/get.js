// get method 

const express = require("express");
const { MongoDBNamespace } = require("mongodb");
const dbConnect = require("./mongodb")
const mongodb = require("mongodb")
const app = express()
app.use(express.json())

app.get("/",async(req,res)=>{
    let result = await dbConnect()
    let data = await result.find().toArray()


    res.send(data)

})

app.post("/",async(req,res)=>{
 let data = await dbConnect()
 let result = await data.insert(req.body)
    res.send(result)
})

app.put("/:name",async(req,res)=>{
let data =await dbConnect();

let result = await data.updateOne({name:req.params.name},{$set:req.body})
// console.log(result)
res.send({result:"update ho chuka he double se" })

})

app.delete("/:id",async(req,res)=>{
    let data = await dbConnect();
    let result = await data.deleteOne({_id: new mongodb.ObjectId(req.params.id)})
console.log(result,"delete data")
    res.send(result)
})

app.listen(5000)