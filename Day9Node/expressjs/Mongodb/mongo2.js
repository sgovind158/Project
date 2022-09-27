const dbConnect = require("./mongodb")
/// read data code 

// dbConnect().then((res)=>{
//     res.find({}).toArray().then((data)=>{
//         console.log(data)
//     })
// })

async function main (){
  let res = await dbConnect();
 let  data = await res.find({}).toArray()
console.log(data)

}

main()