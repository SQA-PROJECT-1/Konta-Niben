const { getProductsById } = require('./getProductsById');
const Product = require('../../models/productModel');

jest.mock('../../models/productModel', () => ({
  findOne: jest.fn(),
}));

describe('getProductsById', () => {
  afterEach(() => {
    jest.clearAllMocks(); // Clear mock calls after each test
  });

  it('should return product when found', async () => {
    const mockProduct = { _id: 'someId', name: 'Product 1' };
    const mockReq = { params: { productId: 'someId' } };
    const mockRes = { status: jest.fn().mockReturnThis(), json: jest.fn() };
    Product.findOne.mockResolvedValue(mockProduct);

    await getProductsById(mockReq, mockRes);

    expect(mockRes.status).toHaveBeenCalledWith(200);
    expect(mockRes.json).toHaveBeenCalledWith(mockProduct);
  });

  it('should handle empty product ID', async () => {
    const mockReq = { params: { productId: '' } };
    const mockRes = { status: jest.fn().mockReturnThis(), json: jest.fn() };

    await getProductsById(mockReq, mockRes);

    expect(mockRes.status).toHaveBeenCalledWith(400);
    expect(mockRes.json).toHaveBeenCalledWith({ error: 'Product ID is required' });
  });

  it('should handle non-existent product ID', async () => {
    const mockReq = { params: { productId: 'nonExistentId' } };
    const mockRes = { status: jest.fn().mockReturnThis(), json: jest.fn() };
    Product.findOne.mockResolvedValue(null);

    await getProductsById(mockReq, mockRes);

    expect(mockRes.status).toHaveBeenCalledWith(404);
    expect(mockRes.json).toHaveBeenCalledWith({ error: 'Product not found' });
  });

  
  it('should handle database connection error', async () => {
    const mockReq = { params: { productId: 'someId' } };
    const mockRes = { status: jest.fn().mockReturnThis(), json: jest.fn() };
    const mockError = new Error('Database connection error');
    Product.findOne.mockRejectedValue(mockError);

    await getProductsById(mockReq, mockRes);

    expect(mockRes.status).toHaveBeenCalledWith(500);
    expect(mockRes.json).toHaveBeenCalledWith({ error: 'Internal server error' });
  });

  it('should handle unexpected errors', async () => {
    const mockReq = { params: { productId: 'someId' } };
    const mockRes = { status: jest.fn().mockReturnThis(), json: jest.fn() };
    const mockError = new Error('Unexpected error');
    Product.findOne.mockRejectedValue(mockError);

    await getProductsById(mockReq, mockRes);

    expect(mockRes.status).toHaveBeenCalledWith(500);
    expect(mockRes.json).toHaveBeenCalledWith({ error: 'Internal server error' });
  });


  it('should handle product ID with only numbers', async () => {
    const mockReq = { params: { productId: '123456' } };
    const mockRes = { status: jest.fn().mockReturnThis(), json: jest.fn() };
    const mockProduct = { _id: '123456', name: 'Product 1' };
    Product.findOne.mockResolvedValue(mockProduct);

    await getProductsById(mockReq, mockRes);

    expect(mockRes.status).toHaveBeenCalledWith(200);
    expect(mockRes.json).toHaveBeenCalledWith(mockProduct);
  });

  it('should handle product ID with only letters', async () => {
    const mockReq = { params: { productId: 'abcd' } };
    const mockRes = { status: jest.fn().mockReturnThis(), json: jest.fn() };
    const mockProduct = { _id: 'abcd', name: 'Product 1' };
    Product.findOne.mockResolvedValue(mockProduct);

    await getProductsById(mockReq, mockRes);

    expect(mockRes.status).toHaveBeenCalledWith(200);
    expect(mockRes.json).toHaveBeenCalledWith(mockProduct);
  });
});
