const http=require('http')
const fs =require('fs')
const { log, error } = require('console');
const { url } = require('inspector');
const path = require('path');
const students = require('./students')

http.createServer(function(req,res) {

    // res.end(JSON.stringify(students))

    if (req.url==="/students") {

    }
    



    if (path.extname(req.url)) {
        fs.readFile(path.basename(req.url),function(err,data) {
            if (err) {
                res.end(err.message);
                res.end(`<img src="https://www.discountsafetysignsaustralia.com.au/wp-content/uploads/2017/02/out-of-service.jpg.webp"/>`)
            }
            else{
               res.end(data)
            }
        })
    }
    else{
        res.end("THIS IS A PATH");
    }
    
}).listen(5000)    
