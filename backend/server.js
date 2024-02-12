require("dotenv").config();
const express = require('express')
const cors = require('cors')
const app = express()
const PORT = 5000
const connectDB = require("./config/db");
const productRouter = require('./routes/productRoute')

app.listen(PORT,(req,res)=>{
    console.log(`App is running on port ${PORT}`)
})

connectDB();

app.use(express.json());
app.use(cors());

app.use("/api/products",productRouter)