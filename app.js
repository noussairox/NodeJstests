const http = require('http');
const fs = require('fs');
const { join } = require('path');

const home = fs.readFileSync(__dirname +"/templates/index.html","utf-8");
const style = fs.readFileSync(__dirname +"/style/style.css","utf-8");

const server = http.createServer(function(request,response){
    if (request.url=='/'){
        response.writeHead(200);
        response.end(home);
    }else if(request.url=='/style/style.css'){
        response.writeHead(200);
        response.end(style);
    }
    
   
    
});

server.listen(4056);
console.log('server is started')