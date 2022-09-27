const fs = require("fs");
const path = require("path")
const dirPath = path.join(__dirname,"files");

// for(let i = 1; i<= 5; i++){

//     fs.writeFileSync(`${dirPath}/hello${i}.txt`, "this is my hellow file")
// }

fs.readdir(dirPath,(err,files)=>{

    files.forEach((ele)=>{
        console.log("this is my file name" , ele)
    })

})