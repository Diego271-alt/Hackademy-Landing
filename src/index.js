const express = require('express');
const { dirname } = require('path');
console.log("diego")
const app= express();
const path =require('path')



app.get('/',(req,res) =>{
    res.sendFile(path.join(__dirname, '/HTML/index.html'));
})


app.use(express.static(path.join(__dirname,'public')))

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Our app is running on port ${ PORT }`);
});


app.listen(app.get('port'), ()=>{
    
})