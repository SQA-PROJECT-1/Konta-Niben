const { searchAndSortProducts } = require('./searchAndSortProducts');
const Product = require('../../models/productModel');

describe('searchAndSortProducts function', () => {
  const req = {
    body: {},
    query: {}
  };
  const res = {
    status: jest.fn(() => res),
    json: jest.fn()
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should handle empty search criteria', async () => {
    req.body = {};
    req.query = {};

    Product.aggregate = jest.fn().mockResolvedValueOnce([{ name: 'Product1', price: 50 }, { name: 'Product2', price: 20 }]);

    await searchAndSortProducts(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith([{ name: 'Product1', price: 50 }, { name: 'Product2', price: 20 }]);
  });

  it('should handle error and return 500 status', async () => {
    const error = new Error('Database error');
    Product.aggregate = jest.fn().mockRejectedValueOnce(error);

    await searchAndSortProducts(req, res);

    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith('Server error');
  });
});