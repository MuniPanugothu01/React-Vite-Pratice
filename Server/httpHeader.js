const http = require('http');

const server = http.createServer((req,res)=>{
    res.writeHead(200,{'content-Type':'text/plain'});
    res.end('this server is end here!')
})

let PORT = 3001;
server.listen(PORT,()=>{
    console.log(`Port is ${PORT} is connected!`);
})