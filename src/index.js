const express = require('express');
const bodyParser=require('body-parser');
const {PORT} = require('./config/server.config');
const apiRouter = require('./routes');
const connectDB = require('./config/db.config');

const mongoose =require('mongoose');
const app= express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.text());


app.use('/api',apiRouter);


app.get('/ping',(req,res)=>{
    return res.json({message:'Problem Service is alive'})
})

app.listen(PORT,async()=>{
   
    console.log(`Server Started at Port:${PORT}`);
    await connectDB();
    console.log("DB connected successfully")

})