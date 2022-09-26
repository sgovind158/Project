const http = require("http")

http.createServer((req,resp)=>{

    resp.write(`<h1>This is govind sahu page</h1>
    <h1>This is govind sahu page</h1>
    <h1>This is govind sahu page</h1>`);
    resp.end();

}).listen(5000);