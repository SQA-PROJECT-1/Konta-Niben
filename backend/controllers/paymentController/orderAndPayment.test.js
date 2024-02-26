const { orderAndPayment, redirect } = require('./orderAndPayment'); // Import the functions to be tested
const SSLCommerzPayment = require('sslcommerz-lts');

// Mocking dependencies
jest.mock('sslcommerz-lts');
const userSchema = require("../../models/userModel");
const CartSchema = require("../../models/cartModel");

describe('orderAndPayment function', () => {
    beforeEach(() => {
        jest.clearAllMocks(); // Clear mock calls between tests
    });

    it('should handle valid input properly', async () => {
        const req = {
            query: {
                userId: '65cb5e0b6e5e4946c060e11e',
                amount: 1000
            }
        };

        const mockResult = {
            userName: 'Seaum Tazim',
            userEmail: 'tazim@gmail.com'
        };
        userSchema.findById = jest.fn().mockResolvedValue(mockResult);

        const mockApiResponse = {
            GatewayPageURL: 'http://mockpaymentgateway.com'
        };
        SSLCommerzPayment.mockImplementation(() => ({
            init: jest.fn().mockResolvedValue(mockApiResponse)
        }));

        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn()
        };

        await orderAndPayment(req, res);

        expect(userSchema.findById).toHaveBeenCalledWith('65cb5e0b6e5e4946c060e11e');
        expect(SSLCommerzPayment).toHaveBeenCalledWith('jahan64b2bbe086728', 'jahan64b2bbe086728@ssl', false);
        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalledWith(mockApiResponse.GatewayPageURL);
    });
    it('should handle missing required parameters', async () => {
        const req = {
            query: {} // Missing userId and amount
        };

        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn()
        };

        await orderAndPayment(req, res);

        expect(res.status).toHaveBeenCalledWith(400);
        expect(res.json).toHaveBeenCalledWith({ error: 'userId and amount are required parameters' });
    });

    it('should handle invalid user ID', async () => {
        const req = {
            query: {
                userId: '65cb5e0b6e5e4946c060e11p', //invalidUserId
                amount: 1000
            }
        };

        userSchema.findById = jest.fn().mockResolvedValue(null); // Simulate user not found

        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn()
        };

        await orderAndPayment(req, res);

        expect(res.status).toHaveBeenCalledWith(404);
        expect(res.json).toHaveBeenCalledWith({ error: 'User not found' });
    });
});

describe('redirect function', () => {
    beforeEach(() => {
        jest.clearAllMocks(); // Clear mock calls between tests
    });

    it('should handle valid user ID properly', async () => {
        const req = { params: { id: '65cb5e0b6e5e4946c060e11e' } };

        CartSchema.deleteMany = jest.fn().mockResolvedValue({ n: 1 });

        const res = {
            status: jest.fn().mockReturnThis(),
            redirect: jest.fn()
        };

        await redirect(req, res);

        expect(CartSchema.deleteMany).toHaveBeenCalledWith({ userId: '65cb5e0b6e5e4946c060e11e' });
        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.redirect).toHaveBeenCalledWith('http://localhost:5173/cart');
    });
});
