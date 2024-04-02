const mongoose  = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.MONGO_URL, {
    dbName: process.env.DB_NAME
}).then(()=>{
    console.log("Database connection successful");
}).catch((err)=>{
  console.log("Database connection failed "+ err);
})