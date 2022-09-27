// Application level midleware
const express = require("express")

const app = express()

const reqFilter = (req,res,next)=>{
    if(!req.query.age){
        res.send("Please provide age")
    }else if(req.query.age <18){
        res.send("Please provide above 18 year age")
    }else{
        next()
    }
}

app.use(reqFilter)
app.get("/",(req,res)=>{
res.send("hello this is my home page")
})




app.get("/about",(req,res)=>{
    res.send("hello this is my about page")
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