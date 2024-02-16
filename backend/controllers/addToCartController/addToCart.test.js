const { addToCart } = require('./addToCart');
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
});
