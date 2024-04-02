const express =require("express");
const app= express()

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const PORT = 8000;
require('dotenv').config();
require('./db')

app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => {
    res.json({message:"the API is working"});
});


app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})
