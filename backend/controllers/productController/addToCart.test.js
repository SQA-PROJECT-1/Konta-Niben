describe('addToCart function', () => {
    test('should return success when valid userId and productId are provided', async () => {
        // Mocking the findOne method of User model to return a user
        User.findOne.mockResolvedValue({ _id: 'userId', username: 'testuser' });

        // Mocking the save method of Cart model
        Cart.prototype.save.mockResolvedValue({ _id: 'cartId', userId: 'userId', productId: 'productId' });

        // Mock request and response objects
        const req = { body: { userId: 'validUserId', productId: 'validProductId' } };
        const res = { status: jest.fn().mockReturnThis(), send: jest.fn() };

        // Call the addToCart function
        await addToCart(req, res);

        // Assertions
        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.send).toHaveBeenCalledWith({ success: true, msg: 'Product added to cart successfully' });
    });

    test('should return error when userId is missing', async () => {
        // Mock request and response objects
        const req = { body: { productId: 'validProductId' } };
        const res = { status: jest.fn().mockReturnThis(), send: jest.fn() };

        // Call the addToCart function
        await addToCart(req, res);

        // Assertions
        expect(res.status).toHaveBeenCalledWith(400);
        expect(res.send).toHaveBeenCalledWith({ success: false, msg: 'Both userId and productId are required' });
    });

    test('should return error when productId is missing', async () => {
        // Mock request and response objects
        const req = { body: { userId: 'validUserId' } };
        const res = { status: jest.fn().mockReturnThis(), send: jest.fn() };

        // Call the addToCart function
        await addToCart(req, res);

        // Assertions
        expect(res.status).toHaveBeenCalledWith(400);
        expect(res.send).toHaveBeenCalledWith({ success: false, msg: 'Both userId and productId are required' });
    });

    test('should return error when user is not found', async () => {
        // Mocking the findOne method of User model to return null (user not found)
        User.findOne.mockResolvedValue(null);

        // Mock request and response objects
        const req = { body: { userId: 'nonExistingUserId', productId: 'validProductId' } };
        const res = { status: jest.fn().mockReturnThis(), send: jest.fn() };

        // Call the addToCart function
        await addToCart(req, res);

        // Assertions
        expect(res.status).toHaveBeenCalledWith(404);
        expect(res.send).toHaveBeenCalledWith({ success: false, msg: 'User not found' });
    });

    // Add more test cases to cover additional scenarios as needed
});
