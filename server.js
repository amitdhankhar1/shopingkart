const express = require('express')
const path=require('path')
const app= express();
app.use('/',express.static(path.join(__dirname,'public')))



app.listen(2678,()=>
    console.log("server started at localhost:2678"))