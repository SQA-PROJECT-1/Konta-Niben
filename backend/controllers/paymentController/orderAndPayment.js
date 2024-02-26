const SSLCommerzPayment = require('sslcommerz-lts')
const store_id = 'jahan64b2bbe086728'
const store_passwd = 'jahan64b2bbe086728@ssl'
const is_live = false //true for live, false for sandbox
const { v4: uuidv4 } = require('uuid');
const Payment = require('../../models/paymentModel');
const userSchema=require("../../models/userModel")
const CartSchema=require("../../models/cartModel")

/**
 * Handles the initialization of SSLCommerz payment and generates an order.
 * @async
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Promise<void>} A promise that resolves after the operation is completed.
 */

//sslcommerz init
const orderAndPayment = async (req, res) => {
    try {
        // Validate required parameters
        if (!req.query.userId || !req.query.amount) {
            return res.status(400).json({ error: 'userId and amount are required parameters' });
        }

        const tId = uuidv4();
        const result = await userSchema.findById(req.query.userId);
        if (!result) {
            return res.status(404).json({ error: 'User not found' });
        }

        const data = {
            total_amount: req.query.amount,
            currency: 'BDT',
            tran_id: tId,
            success_url: `http://localhost:5000/api/payment/success/${req.query.userId}`,
            fail_url: `http://localhost:5000/api/payment/success/${req.query.userId}`,
            cancel_url: `http://localhost:5000/api/payment/success/${req.query.userId}`,
            ipn_url: `http://localhost:5000/api/payment/success/${req.query.userId}`,
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
            cus_fax: "01934763871",
            ship_name: 'Customer Name',
            ship_add1: 'Dhaka',
            ship_add2: 'Dhaka',
            ship_city: 'Dhaka',
            ship_state: 'Dhaka',
            ship_postcode: 1000,
            ship_country: 'Bangladesh',
        };

        const sslcz = new SSLCommerzPayment(store_id, store_passwd, is_live);
        const apiResponse = await sslcz.init(data);

        // Redirect the user to payment gateway
        const GatewayPageURL = apiResponse.GatewayPageURL;
        res.status(200).json(GatewayPageURL);
        console.log('Redirecting to:', GatewayPageURL);
    } catch (error) {
        console.error('Error initiating payment:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

/**
 * Redirects the user after successful payment completion.
 * @async
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Promise<void>} A promise that resolves after the operation is completed.
 */

const redirect = async (req, res) => {
    try {
        const id = req.params.id;
        if (!id) {
            return res.status(400).json({ error: 'User ID is required' });
        }

        const result = await CartSchema.deleteMany({ userId: id });
        if (!result) {
            return res.status(404).json({ error: 'User not found or no items to delete' });
        }

        res.status(200).redirect('http://localhost:5173/home/cart');
    } catch (error) {
        console.error('Error redirecting after payment:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports = {
    orderAndPayment,
    redirect
}