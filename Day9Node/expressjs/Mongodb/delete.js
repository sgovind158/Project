const dbConnect = require("./mongodb")
// deleteMany 
// deleteOne - single 

const deleteFun = async()=>{

    let data = await dbConnect();
    let result = await data.deleteMany({name : "micromax1 pro"})

    if(result.acknowledged){
        console.log("delete data ",result.deletedCount)
    }
}

deleteFun()