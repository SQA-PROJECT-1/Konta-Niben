require("dotenv").config();
const express = require('express');
const cors = require('cors'); // Importing cors middleware
const app = express();
const PORT = 5000;
const connectDB = require("./config/db");
const productRouter = require('./routes/productRoute');
const adminRouter = require('./routes/adminRouter');
const userRouter = require('./routes/userRouter');

app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}`);
});

connectDB();

app.use(
    cors({ // This is where you're calling cors
      origin: ["http://localhost:5173"],
      credentials: true,
    })
);

app.use(express.json());

app.use("/api/products", productRouter);
app.use("/api/admin", adminRouter);
app.use("/api/users", userRouter);
