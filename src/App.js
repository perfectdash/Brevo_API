const express  = require("express");
require("../.env").config;
const app = express();
const PORT = process.env.PORT || 8000;
const Mail = require("../Controller/brevo_setup");


app.get('/',Mail);


const start = async ()=>{
    try{
       app.listen(PORT,()=>{
          console.log(`listening to the port ${PORT}`); 
       });
    }catch(err){
       console.log("failed to send the email");
    }
}

start();
