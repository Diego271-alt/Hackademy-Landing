const express = require('express');
const { dirname } = require('path');
console.log("diego")
const app= express();
const path =require('path')
app.set('port',4000);


app.get('/',(req,res) =>{
    res.sendFile(path.join(__dirname, '/HTML/index.html'));
})


app.use(express.static(path.join(__dirname,'public')))

app.listen(app.get('port'), ()=>{
    
})