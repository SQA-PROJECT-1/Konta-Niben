require("dotenv").config();
const express = require('express')
const app = express()
const PORT = 5000
const connectDB = require("./config/db");


app.listen(PORT,(req,res)=>{
    console.log(`App is running on port ${PORT}`)
})

connectDB();

app.use(express.json());