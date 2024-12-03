var express = require('express')
var app = express()
var mongoose=require('mongoose')
var users = "mongodb+srv://rushikesh:@AsusR540ub@cluster0.jejlv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
mongoose.connect(users).then((res)=>{console.log(res)}).catch((err)=>{console.log(err)})






app.listen(4500);