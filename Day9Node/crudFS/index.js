
const fs = require('fs')
const path = require("path")
const dirPath = path.join(__dirname,"crud")
const fileName = `${dirPath}/apple.txt`


//  create file 
// fs.writeFileSync(fileName,"this is my apple file+")

// read file 
// fs.readFile(fileName,"utf8",(err,ele)=>{
// console.log(ele)
// })

// append file
// fs.appendFile(fileName,' for fruits this is my fruit',(err)=>{
//     if(!err){
//         console.log("file  is updated ")
//     }
// })

// rename file
// fs.rename(fileName,`${dirPath}/orange.txt`,(err)=>{
//     if(!err){
//              console.log("file  is rename  ")
//              }
// })

// delete 

// fs.unlinkSync(`${dirPath}/orange.txt`)