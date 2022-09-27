const dbConnect = require("./mongodb")

const insertFun = async()=>{
    let db = await dbConnect();
   let  result = await db.insert([
    {name : "max 1 ",
     brand :"micromax",
     price :5000,
     category : "mobile"
      },

      {name : "max 1 ",
      brand :"micromax",
      price :5000,
      category : "mobile"
       },

       {name : "max 1 ",
       brand :"micromax",
       price :5000,
       category : "mobile"
        }
    ])
  
  if(result.acknowledged){
    console.log("yes data is inserted ")
  }
  }

  insertFun()