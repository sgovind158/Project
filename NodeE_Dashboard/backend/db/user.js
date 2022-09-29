// import mongoose 
// create schema 
// export model 

const mongoose = require("mongoose")

const userSchema = mongoose.Schema(
    {
        name:String,
        email:String,
        password : String,
       
    })

    module.exports = mongoose.model("users",userSchema)