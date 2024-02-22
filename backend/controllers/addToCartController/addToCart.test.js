const { addToCart } = require('./addTocart');
const Cart = require('../../models/cartModel');

jest.mock('../../models/cartModel');

describe('addToCart function', () => {
    test('should add product to cart when both userId and productId are provided and product does not exist in cart', async () => {
        // Mocking request and response objects
        const req = { query: { userId: 'validUserId', productId: 'validProductId' } };
        const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };

        // Mocking the findOne method of Cart model to return null (product not existing in cart)
        Cart.findOne.mockResolvedValue(null);

        // Call the addToCart function
        await addToCart(req, res);

        // Assertions
        expect(res.status).toHaveBeenCalledWith(201);
        expect(res.json).toHaveBeenCalledWith({ message: 'Product added to cart successfully' });
    });

    test('should return error when userId or productId is missing in the request query', async () => {
        // Mocking request and response objects
        const req = { query: {} };
        const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };

        // Call the addToCart function
        await addToCart(req, res);

        // Assertions
        expect(res.status).toHaveBeenCalledWith(400);
        expect(res.json).toHaveBeenCalledWith({ message: 'userId and productId are required in the query' });
    });

    test('should return error when product already exists in the cart', async () => {
        // Mocking request and response objects
        const req = { query: { userId: 'validUserId', productId: 'validProductId' } };
        const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };

        // Mocking the findOne method of Cart model to return an existing product
        Cart.findOne.mockResolvedValue({ userId: 'validUserId', productId: 'validProductId' });

        // Call the addToCart function
        await addToCart(req, res);

        // Assertions
        expect(res.status).toHaveBeenCalledWith(400);
        expect(res.json).toHaveBeenCalledWith({ message: 'Product already exists in the Cart' });
    });

    test('should return internal server error if an error occurs during database operation', async () => {
        // Mocking request and response objects
        const req = { query: { userId: 'validUserId', productId: 'validProductId' } };
        const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };

        // Mocking the findOne method of Cart model to throw an error
        Cart.findOne.mockRejectedValue(new Error('Database error'));

        // Call the addToCart function
        await addToCart(req, res);

        // Assertions
        expect(res.status).toHaveBeenCalledWith(500);
        expect(res.json).toHaveBeenCalledWith({ message: 'Internal server error' });
    });
});