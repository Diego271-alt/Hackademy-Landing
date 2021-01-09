const { error } = require('console');
const express = require('express');
const { release } = require('os');
const { dirname } = require('path');
console.log("diego")
const app= express();
const DRM =require('path')
const {Client, Pool} = require('pg');

const db = new Pool({
    connectionString: "postgres://cyeeqhvzfmwfjo:e924caa82c77d46049ce8321e3e3f9bc23fe9a59c4dcff9d4c12b6d91203e5ae@ec2-54-157-12-250.compute-1.amazonaws.com:5432/dct9ja4j2fhrti" ,
    ssl: {
    rejectUnauthorized: false
    },
    
   });

app.use(express.urlencoded());
app.use(express.json());



app.get('/',(req,res) =>{
    res.sendFile(DRM .join(__dirname, '/HTML/index.html'));
    

})


app.post('/',  function(request, response){
        
        //const res= await db.query(`INSERT INTO usuarios(nombre, edad) VALUES('${request.body.user.name}','${request.body.user.email}')`)
        db.query('SELECT * FROM usuarios',(error,results)=>{
            if(error){
                throw error
            }
            response.status(200).json(results.rows)
            console.log(results.rows)
        })
 



});

app.use(express.static(DRM .join(__dirname,'public')))

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`DRM ${ PORT }`);

});


