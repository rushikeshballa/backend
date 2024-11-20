const express= require("express")
const app=express()
const students = require('./students')
app.set('view engine' , 'pug')
const fs=require('fs')

app.get("/",function(req,res) {
    res.send("home page")
})

app.get("/rating",function (req,res) {
    var rat = JSON.parse(fs.readFileSync("rating.txt").toString()) 
    res.render("ratings",{rat})
})
 
app.get("/add/:fn/:fb",function (req,res) {
  var x=parseInt(req.params.fb)+parseInt(req.params.fn)
  res.send(x.toString())   
})

app.get("/index",function(req,res){
    res.sendFile(__dirname+("/index.html"))
})

app.get("/students",function(req,res){
        var tb="";
        for(var i=0;i<=students.length-1;i++){
            tb=tb+`
            <tr>
            <td>${students[i].firstname}</td>
             <td>${students[i].lastname}</td>
              <td>${students[i].class}</td>
               <td><a href="student/${i}">view more </a></td>
            </tr>   `
            
             
        }
        res.send(`<table border="1px" >${tb}</table>`)
})

app.get("/pug",function(req,res) {
    res.render('home',{students:students})
})


app.get("/student/:i",function(req,res) {
    var id=+req.params.i
    var st=`
    <h1>Fiestname:
    ${students[id].firstname}
    </h1>
    <h1>Lastname:
    ${students[id].lastname}
    </h1>
    <h1>Class:
    ${students[id].class}
    </h1>
    <h1>Rollnumber:
    ${students[id].rollnumber}
    </h1>
    <h1>Subjests:
    ${[students[id].subjects]}
    </h1>
    <h1>Gender:
    ${students[id].gender}
    </h1>
    `
    res.send(st)
})



app.listen(4500);