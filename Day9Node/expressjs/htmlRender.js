
const express = require("express")

const app = express()
app.get("/",(req,res)=>{
res.send("hello this is my home page and html render page")
})




app.get("/about",(req,res)=>{
    res.send("hello this is my about page and html render page")
    })

    app.get("/detail",(req,res)=>{
        res.send("hello this is my detail page")
        })

        app.get("/login",(req,res)=>{
            res.send("hello this is my login page")
            })

            app.get("/logout",(req,res)=>{
                res.send("hello this is my logout page")
                })

                app.get("*",(req,res)=>{
                    res.send("page not found page")
                    })
app.listen(5000)