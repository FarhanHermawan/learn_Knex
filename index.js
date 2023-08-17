const express = require("express");
const app = express()

app.get('/ping',(req,res) =>{
    res.json({
        ping:'ok'
    })
})

app.listen (3000,() =>{
    console.log ('server running http://localhost:3000')
})