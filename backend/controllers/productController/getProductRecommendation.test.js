const { getProductRecommendation } = require('./getProductRecommendation');
const Product = require('../../models/productModel');


describe('getProductRecommendation', () => {
    test('should return recommended products for a valid product category', async () => {
       
        const req = {
            body: {
                productCategory: 'SkinCare',
                productTargetedSkinType: 'Oily',
                productTargetedConcerns: 'Acne'
            }
        };
    
        const res = {
            status: jest.fn(() => res), 
            json: jest.fn()
        };
        jest.spyOn(Product, 'find').mockResolvedValue([{}]);
    
        await getProductRecommendation(req, res);
        console.log(res);
        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalledWith([{}]);
    });
    
  test('should return recommended products with targeted age', async () => {
    const req = {
      body: {
        productCategory: 'SkinCare',
        productTargetedAge: 20, 
        productTargetedSkinType: 'Oily',
        productTargetedConcerns: 'Acne'
      }
    };
    const res = {
      status: jest.fn(() => res),
      json: jest.fn()
    };
    
    await getProductRecommendation(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(expect.any(Array));
  },);

  test('should return recommended products for a valid skin type', async () => {
    const req = {
      body: {
        productCategory: 'HairCare',
        productTargetedSkinType: 'Oily', 
        productTargetedConcerns: 'Dandruff'
      }
    };
    const res = {
      status: jest.fn(() => res),
      json: jest.fn()
    };
    
    await getProductRecommendation(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(expect.any(Array));
  },);

  test('should not return products for a negative age value', async () => {
    const req = {
        body: {
            productCategory: 'HairCare',
            productTargetedAge: -10, 
            productTargetedSkinType: 'Normal',
            productTargetedConcerns: 'Dandruff'
        }
    };
    const res = {
        status: jest.fn(() => res),
        json: jest.fn()
    };

    await getProductRecommendation(req, res);

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({ error: 'Age cannot be negative.' }); 
});
  
  test('should return an error for missing input parameters', async () => {
    const req = {
      body: {} 
    };
    const res = {
      status: jest.fn(() => res),
      json: jest.fn()
    };
    
    await getProductRecommendation(req, res);

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({ error: 'Please provide product category, targeted concerns, and targeted skin type.' });
  },);

  test('should handle database errors gracefully', async () => {
    jest.spyOn(Product, 'find').mockRejectedValue(new Error('Database error'));

    const req = {
        body: {
            productCategory: 'HairCare',
            productTargetedSkinType: 'Normal',
            productTargetedConcerns: 'Dandruff'
        }
    };
    const res = {
        status: jest.fn(() => res),
        json: jest.fn()
    };

    await getProductRecommendation(req, res);

    expect(res.status).toHaveBeenCalledWith(500); 
    expect(res.json).toHaveBeenCalledWith({ error: 'An error occurred.' }); 
  
});

});
