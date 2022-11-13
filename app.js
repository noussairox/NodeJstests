const http = require('http');
const fs = require('fs');
const url = require('url');
const express = require('express');
const prods = require('./produit.js');
const bodyParser = require('body-parser')
const path = require('path');

// const home = fs.readFileSync(__dirname +"/templates/index.html","utf-8");
// const style = fs.readFileSync(__dirname +"/style/style.css","utf-8");

// // const server = http.createServer(function(request,response){
// //     if (request.url=='/'){
// //         response.writeHead(200);
// //         response.end(home);
// //     }else if(request.url=='/style/style.css'){
// //         response.writeHead(200);
// //         response.end(style);
// //     }
    
// // });
// let server = http.createServer(function( req,res){
//     let page = url.parse(req.url).pathname;
//     res.writeHead(200,{"Content-Type":"text/html"})
//     if (page == '/') {
//         res.writeHead(200);
//         res.end(home)
//     }else if(req.url=='/style/style.css'){
//              res.writeHead(200);
//              res.end(style);
//     }else{
//         res.write('route not found')
//     }
//     res.end();
// })
const app = express();
app.use(bodyParser.json({ type: 'application/json' }))
app.use(bodyParser.urlencoded({ extended: false }))

app.use(express.static(__dirname + '/style'));
app.get('/',(req, res)=>{
    res.sendFile(path.join(__dirname,"templates/index.html"));
})



app.use(express.json());
app.get('/add',(req,res)=>{
    res.sendFile(path.join(__dirname,"templates/add.html"));
    // const produit = {
    //     id : req.body.id,
    //     name : req.body.name,
    //     price :req.body.price,
    //     ram : req.body.ram,
    //     stockage : req.body.stockage,
    //     company : req.body.company,
    //     camera : req.body.camera
    // }
    // prods.push(produit);
    // res.send(produit)
})

app.listen(4056);
console.log('server is started')