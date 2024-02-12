const express = require("express")
const cartRoute = express();
const bodyParser = require("body-parser");
cartRoute.use(bodyParser.json());
cartRoute.use(bodyParser.urlencoded({extended: true}));

// const auth = require("../middleware/auth");
const cartController = require("../controllers/cartController")
cartRoute.post('/add-to-cart', cartController.addToCart);
module.exports = cartRoute;