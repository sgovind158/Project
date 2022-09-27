const  mongoose  = require("mongoose");


const ProductSchema  = new mongoose.Schema({
 name : String,
 brand :String,
 price : Number,
 category :String
})

const saveInDb= async()=>{
    await mongoose.connect("mongodb://localhost:27017/e-comm"); 

   const ProductModel = mongoose.model("products",ProductSchema);
   let data = new ProductModel({name:"oppo1",price:15000,brand:"oppo",category:"phone"});
   let result = await data.save()
   console.log(result)
}

//  saveInDb()
const updateInDB = async()=>{
    await mongoose.connect("mongodb://localhost:27017/e-comm");
    const  Product =  mongoose.model("products",ProductSchema)
    let data = await Product.updateOne(
        {name:"iphone 13"},
    {$set:{name:"iphone 1",price:50000}}
    )
    console.log(data)

}
// updateInDB()

const deleteInDB = async()=>{
    await mongoose.connect("mongodb://localhost:27017/e-comm")
    const Product = mongoose.model("products",ProductSchema)

    let data = await Product.deleteMany({name: "m 10"})
    console.log(data,"this is delete data")

}
// deleteInDB()


const findeInDB = async()=>{

    await mongoose.connect("mongodb://localhost:27017/e-comm")

    const Product = mongoose.model("products",ProductSchema)
let data = await Product.find({name:"oppo1"})
console.log(data,"find data ")
}

// findeInDB()