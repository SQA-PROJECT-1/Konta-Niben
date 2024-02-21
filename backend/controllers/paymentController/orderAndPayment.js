const SSLCommerzPayment = require('sslcommerz-lts')
const store_id = 'jahan64b2bbe086728'
const store_passwd = 'jahan64b2bbe086728@ssl'
const is_live = false //true for live, false for sandbox
const { v4: uuidv4 } = require('uuid');
const Payment = require('../../models/paymentModel');
const userSchema=require("../../models/userModel")
const CartSchema=require("../../models/cartModel")

//sslcommerz init
const orderAndPayment = async (req, res) => {
    const body=req.query;
    const tId=uuidv4();
    const result=await userSchema.findById(req.query.userId);
    // const email=result.email;
    // console.log(result.userEmail)
    // res.json({result})
    const data = {
        total_amount: body.amount,
        currency: 'BDT',
        tran_id: tId, // use unique tran_id for each api call
        success_url:`http://localhost:5000/api/payment/success/${req.query.userId}`,
        fail_url:`http://localhost:5000/api/payment/success/${req.query.userId}`,
        cancel_url:`http://localhost:5000/api/payment/success/${req.query.userId}`,
        ipn_url:`http://localhost:5000/api/payment/success/${req.query.userId}`,
        shipping_method: 'Courier',
        product_name: 'Computer.',
        product_category: 'Electronic',
        product_profile: 'general',
        cus_name: result.userName,
        cus_email: result.userEmail,
        cus_add1: 'Dhaka',
        cus_add2: 'Dhaka',
        cus_city: 'Dhaka',
        cus_state: 'Dhaka',
        cus_postcode: '1000',
        cus_country: 'Bangladesh',
        cus_phone: "01934763871",
        cus_fax:"01934763871",
        ship_name: 'Customer Name',
        ship_add1: 'Dhaka',
        ship_add2: 'Dhaka',
        ship_city: 'Dhaka',
        ship_state: 'Dhaka',
        ship_postcode: 1000,
        ship_country: 'Bangladesh',
    };
    const sslcz = new SSLCommerzPayment(store_id, store_passwd, is_live)
    await sslcz.init(data).then(async(apiResponse) => {
        // Redirect the user to payment gateway
        let GatewayPageURL = apiResponse.GatewayPageURL
        res.status(200).json(GatewayPageURL)
        // res.redirect(GatewayPageURL)
        console.log('Redirecting to: ', GatewayPageURL)
    });
}


const redirect = async (req, res) => {
    const id = req.params.id; // Assuming you are passing the ID as a route parameter
    
    try {
        const result = await CartSchema.deleteMany({ userId: id });
        res.status(200).redirect('http://localhost:5173/cart');
    } catch (err) {
        console.error('Error deleting documents:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
}

module.exports = {
    orderAndPayment,
    redirect
}