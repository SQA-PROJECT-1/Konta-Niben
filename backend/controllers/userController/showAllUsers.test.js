const { showAllUsers } = require('./showAllUsers');
const User = require('../../models/userModel');

// Mocking the User model
jest.mock('../../models/userModel');

describe('showAllUsers function', () => {
  test('should return all users except admin', async () => {
    // Mock the behavior of User.find to return dummy data
    const dummyUsers = [
      { username: 'user1', userRole: 'user' },
      { username: 'user2', userRole: 'user' },
    ];
    User.find.mockResolvedValue(dummyUsers);

    // Mock request and response objects
    const req = {};
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    await showAllUsers(req, res);

    // Expectations
    expect(User.find).toHaveBeenCalledWith({ userRole: { $ne: 'admin' } });
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(dummyUsers);
  });

  test('should return "User not found" if no users except admin are found', async () => {
    // Mock the behavior of User.find to return empty array
    User.find.mockResolvedValue([]);

    // Mock request and response objects
    const req = {};
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    await showAllUsers(req, res);

    // Expectations
    expect(User.find).toHaveBeenCalledWith({ userRole: { $ne: 'admin' } });
    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith('User not found');
  });
  
})