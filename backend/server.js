require("dotenv").config();
const express = require('express')
const app = express('/backend/server.js')
const cors = require('cors');
const PORT = 5000
const connectDB = require("./config/db");
const addToCartRouter = require('./routes/addTocartRouter');
const paymentRouter = require('./routes/paymentRouter');
const productRouter = require('./routes/productRoute')
const adminRouter = require('./routes/adminRouter')
const userRouter = require('./routes/userRouter')
const wishListRouter = require('./routes/wishListRouter')
const ratingRoute=require("./routes/reviewSystemRoute");
const reviewRoute=require("./routes/reviewSystemRoute");

app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}`);
});

connectDB();

app.use(
    cors({
      origin: ["http://localhost:5173"],
      credentials: true,
    })
  );
  
app.use(express.json());

app.use("/api/addTocart",addToCartRouter)
app.use("/api/payment",paymentRouter)
app.use("/api/products",productRouter)
app.use("/api/admin",adminRouter)
app.use("/api/users",userRouter)
app.use("/api/wishList",wishListRouter)
app.use("/api/products/review",reviewRoute)
