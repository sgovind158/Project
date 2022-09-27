// import express
// import event 
// create app 
// create port

const express = require("express");
const EventEmit = require("events");
const app = express();
const event = new EventEmit();

let count = 0;
event.on("countApi",()=>{
count++
console.log("api called",count)
})

app.get("/",(req,resp)=>{

    resp.send("this is my home page")
    event.emit("countApi")
})

app.get("/about",(req,resp)=>{

    resp.send("this is my about page")
    event.emit("countApi")
})
app.listen(5000)