const mongoose = require("mongoose");
require('dotenv').config();


//   connecting mango db databse using mangoose

var mongoURL = process.env.MONGOLAB_URI;
//  comes from dotenv file for protection of password 


//  accepts url, safety parameters
mongoose.connect(mongoURL, {useNewUrlParser: true, useUnifiedTopology: true});




var connection = mongoose.connection

//  checking the connection with db 
connection.on('error', ()=>{
    console.log('Mongo DB connection failed');
})

connection.on('connected', ()=>{
    console.log('Mongo DB connection worked');
})

//  export the object to use in the sever.js
module.exports = mongoose