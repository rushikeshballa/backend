const express= require("express")
const app=express()

app.get("/",function(req,res) {
    res.send("home page")
})
 
app.get("/add/:fn/:fb",function (req,res) {
  var x=parseInt(req.params.fb)+parseInt(req.params.fn)
  res.send(x.toString())   
})




app.listen(4500);