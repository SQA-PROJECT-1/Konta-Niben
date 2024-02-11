const express = require('express')
const app = express()
const PORT = 5000

app.listen(PORT,(req,res)=>{
    console.log(`App is running on port ${PORT}`)
})