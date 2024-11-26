const express= require('express')
const app=express();
const fs=require('fs')
const cors= require('cors')
app.use(cors())
const cookieParser=require('cookie-parser')
const BodyParser=require('body-parser')



app.get("/",((req,res)=>{
    res.send('home')
}))


app.listen(4800);