var express = require('express')
var app = express()
var mongoose=require('mongoose')
var mongo = "mongodb+srv://rushikesh:Asdfghjkl123@cluster0.jejlv.mongodb.net/NewDB?retryWrites=true&w=majority&appName=Cluster0"
mongoose.connect(mongo).then((res)=>{console.log("conected")}).catch((err)=>{console.log(err)})








app.listen(4500);