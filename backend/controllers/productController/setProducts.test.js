const { setProducts } = require('./setProducts');
const Product = require('../../models/productModel');

const res = {
    status: jest.fn().mockReturnThis(),
    json: jest.fn(),
    send: jest.fn()
};

describe('setProducts function', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('should return 400 if required fields are missing in the request body', async () => {
        const req = {
            body: {}
        };

        await setProducts(req, res);

        expect(res.status).toHaveBeenCalledWith(400);
        expect(res.json).toHaveBeenCalledWith({ error: "id, name, price and quantity fields are required." });
    });

    test('should create and save a new product when all required fields are provided', async () => {
        const req = {
            body: {
                productId: '123',
                productName: 'Test Product',
                productPrice: 10.99,
                productCategory: 'Test Category',
                productSubcategory: 'Test Subcategory',
                productDescription: 'Test Description',
                productBrandName: 'Test Brand',
                productQuantity: 20
            }
        };

        const mockSave = jest.fn();
        jest.spyOn(Product.prototype, 'save').mockImplementation(mockSave);

        await setProducts(req, res);

        expect(mockSave).toHaveBeenCalled();
        expect(res.status).toHaveBeenCalledWith(201);
        expect(res.json).toHaveBeenCalled();
    });

    test('should return 500 if an error occurs during product creation and saving', async () => {
        const req = {
            body: {
                productId: '123',
                productName: 'Test Product',
                productPrice: 10.99,
                productBrandName: 'Test Brand',
                productQuantity: 20
            }
        };
    
        jest.spyOn(Product.prototype, 'save').mockImplementation(() => {
            throw new Error('Test error');
        });
    
        await setProducts(req, res);
    
        expect(res.status).toHaveBeenCalledWith(500);
        expect(res.send).toHaveBeenCalledWith('Test error');
    });
    
});
