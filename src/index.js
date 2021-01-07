const express = require('express');
const { dirname } = require('path');
console.log("diego")
const app= express();
const DRM =require('path')
const {Pool} =require('pg')

/*

 const configDataBase = {
    user:'cyeeqhvzfmwfjo',
    host:'ec2-54-157-12-250.compute-1.amazonaws.com',
    password:'',
    database:'dct9ja4j2fhrti'


}



const db= new Pool(configDataBase)


*/

app.get('/',(req,res) =>{
    res.sendFile(DRM .join(__dirname, '/HTML/index.html'));
})


app.use(express.static(DRM .join(__dirname,'public')))

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`DRM ${ PORT }`);
});


