const { searchAndSortProducts } = require('../productController/searchAndSortProducts');
const { Product } = require('../../models/productModel');

describe('searchAndSortProducts', () => {
  it('should return search results with proper parameters', async () => {
    const req = {
      body: {
        productName: 'test',
        productCategory: 'category',
        productBrandName: 'brand',
        priceMin: 10,
        priceMax: 100
      },
      query: {
        sortBy: 'productPrice'
      }
    };
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    };
    const fakeSearchResult = [{ id: 1, productName: 'Test Product', productPrice: 50 }];
    Product.aggregate = jest.fn().mockResolvedValue(fakeSearchResult);

    await searchAndSortProducts(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(fakeSearchResult);
    expect(Product.aggregate).toHaveBeenCalledWith([
      {
        $match: {
          productCategory: 'category',
          productBrandName: 'brand',
          productName: { $regex: /test/i },
          productPrice: { $gte: 10, $lte: 100 }
        }
      },
      {
        $sort: { productPrice: 1 }
      }
    ]);
  });

  it('should handle server error', async () => {
    const req = {
      body: {},
      query: {}
    };
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    };
    const errorMessage = 'Database error';
    Product.aggregate = jest.fn().mockRejectedValue(new Error(errorMessage));

    await searchAndSortProducts(req, res);

    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith('Server error');
  });
});
