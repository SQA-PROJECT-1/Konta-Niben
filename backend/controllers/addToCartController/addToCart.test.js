const { addToCart } = require('../../controllers/addToCartController/addToCart'); // Replace with the actual path to your addToWishlist file
const cartList = require('../../models/cartModel');

const res = {
    status: jest.fn().mockReturnThis(),
    json: jest.fn(),
    send: jest.fn()
};

describe('addToCart function', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('should return 400 if userId or productId is missing in the request query', async () => {
        const req = {
            query: {}
        };

        await addToCart(req, res);

        expect(res.status).toHaveBeenCalledWith(400);
        expect(res.json).toHaveBeenCalledWith({ message: 'userId and productId are required in the query' });
    });

    test('should return 400 if the product already exists in the wishlist', async () => {
        const req = {
            query: {
                userId: 'mockUserId',
                productId: 'mockProductId'
            }
        };

        jest.spyOn(cartList, 'findOne').mockResolvedValue({ userId: 'mockUserId', productId: 'mockProductId' });

        await addToCart(req, res);

        expect(res.status).toHaveBeenCalledWith(400);
        expect(res.json).toHaveBeenCalledWith({ message: 'Product already exists in the wishlist' });
    });

    test('should add the product to the wishlist and return 201 on success', async () => {
        const req = {
            query: {
                userId: 'mockUserId',
                productId: 'mockProductId'
            }
        };

        jest.spyOn(cartList, 'findOne').mockResolvedValue(null);
        jest.spyOn(cartList.prototype, 'save').mockImplementation(jest.fn());

        await addToCart(req, res);

        expect(res.status).toHaveBeenCalledWith(201);
        expect(res.json).toHaveBeenCalledWith({ message: 'Product added to wishlist successfully' });
    });

    test('should handle errors and return 500 status code', async () => {
        const req = {
            query: {
                userId: 'mockUserId',
                productId: 'mockProductId'
            }
        };

        jest.spyOn(WishList, 'findOne').mockRejectedValue(new Error('Mocked error'));

        await addToCart(req, res);

        expect(res.status).toHaveBeenCalledWith(500);
        expect(res.json).toHaveBeenCalledWith({ message: 'Internal server error' });
    });
});