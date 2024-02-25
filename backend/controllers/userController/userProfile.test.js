const userProfile = require('./userProfile');
const User = require('../../models/userModel');

// Mock the User model and its methods
jest.mock('../../models/userModel', () => ({
    findOne: jest.fn(),
}));

describe('userProfile function', () => {
    it('should return the profile of the logged-in user', async () => {
        // Mock the request object
        const req = {
            user: {
                userEmail: 'test@example.com', // Set up a user email for testing
            },
        };

        // Mock the response object
        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn(),
        };

        // Mock the user profile data
        const userProfileData = {
            _id: '123',
            username: 'testuser',
            email: 'test@example.com',
            // Add other profile data as needed
        };

        // Mock the findOne method of the User model
        User.findOne.mockResolvedValue(userProfileData);

        // Call the userProfile function
        await userProfile(req, res);

        // Check if the findOne method of the User model is called with the correct parameters
        expect(User.findOne).toHaveBeenCalledWith({ useEmail: req.user.userEmail });

        // Check if the response status is set to 200 and json is called with the userProfileData
        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalledWith(userProfileData);
    });

    it('should handle errors and return status 500 with a message', async () => {
        // Mock the request and response objects
        const req = {
            user: {
                userEmail: 'test@example.com',
            },
        };

        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn(),
        };

        // Mock the error
        const error = new Error('Test error');

        // Mock the findOne method of the User model to throw an error
        User.findOne.mockRejectedValue(error);

        // Call the userProfile function
        await userProfile(req, res);

        // Check if the response status is set to 500 and json is called with the error message
        expect(res.status).toHaveBeenCalledWith(500);
        expect(res.json).toHaveBeenCalledWith({ message: "Something went wrong to get admin" });
    });
});
