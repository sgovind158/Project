const dbConnect = require("./mongodb")
// updateOne and for many update
const updateFun = async()=>{
    let data =  await dbConnect()
    let result = await data.updateOne(
        {name : "micromax1 pro",price:5000},{$set:{name : "micromax1 pro",price:20000}}
        )
console.log(result)
}

updateFun()