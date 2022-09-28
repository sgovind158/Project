// import http form http
// import data from data
//create server  {'Content-Type':'application\json'}
// create port 

const http  = require("http");
const data = require("./data")


http.createServer((req, res)=>{

res.writeHead(200,{'Content-Type':'application\json'})
res.write(JSON.stringify(data))

 res.end()
}).listen(7000)