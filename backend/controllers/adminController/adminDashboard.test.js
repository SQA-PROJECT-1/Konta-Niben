const { adminDashboard } = require('./adminDashboard');
const Product = require('../../models/productModel');
const User = require('../../models/userModel');

jest.mock('../../models/productModel');
jest.mock('../../models/userModel');

describe('adminDashboard function', () => {
  
    test('should retrieve dashboard data successfully with category, subcategory, and brand wise products', async () => {
       
        Product.countDocuments.mockResolvedValueOnce(6);
        
        Product.aggregate
          .mockResolvedValueOnce([{ _id: 'Makeup', count: 10 }])
          .mockResolvedValueOnce([{ _id: 'Foundation', count: 1, products: [{ productId: 234, productName: 'MAC Pro Longwear Foundation', productPrice: 2500, productCategory: 'Makeup', productSubcategory: 'Foundation', productDescription: 'MAC Pro Longwear Foundation offers precision, performance and intense pigmentation without drying the face.', availability: 'instock', productBrandName: 'MAC' }] }])
          .mockResolvedValueOnce([{ _id: 'MAC', count: 6, products: [] }]);
        
          User.countDocuments.mockResolvedValueOnce(5);
    
        const req = {};
        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn()
        };
    
        await adminDashboard(req, res);
    
        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalledWith({ 
            countOverallProducts: 6,
            formattedCategories: [
                {
                    name: 'Makeup',
                    count: 10,
                    products: [
                        {
                            _id: 'Foundation',
                            count: 1,
                            products: [
                                {
                                    productId: 234, 
                                    productName: 'MAC Pro Longwear Foundation',
                                    productPrice: 2500, 
                                    productCategory: 'Makeup', 
                                    productSubcategory: 'Foundation', 
                                    productDescription: 'MAC Pro Longwear Foundation offers precision, performance and intense pigmentation without drying the face.', 
                                    availability: 'instock', 
                                    productBrandName: 'MAC'
                                }
                            ]
                        }
                    ]
                }
            ],
            formattedBrands: [
                {
                    name: 'MAC',
                    count: 6,
                    products: [] 
                }
            ],
            countTotalUsers: 5
        });
    });
    

  test('should handle errors and send 500 status code', async () => {
   
    Product.countDocuments.mockRejectedValueOnce(new Error('Database error'));

    const req = {};
    const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn()
    };
    await adminDashboard(req, res);

    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({ error: 'Internal server error. Please try again later.' });
  });
});
