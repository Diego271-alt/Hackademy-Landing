const express = require('express');
const { dirname } = require('path');
console.log("diego")
const app= express();
const DRM =require('path')



app.get('/',(req,res) =>{
    res.sendFile(DRM .join(__dirname, '/HTML/index.html'));
})


app.use(express.static(DRM .join(__dirname,'public')))

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`DRM ${ PORT }`);
});


