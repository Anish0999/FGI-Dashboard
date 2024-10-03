require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const app = new express();








// connect to database
mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        app.listen(process.env.PORT, ()=>{
            console.log(`Listening on port ${process.env.PORT}`);
        })
    })
    .catch((error)=>{
        console.log(error);
    })


