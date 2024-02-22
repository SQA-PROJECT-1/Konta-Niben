const { getProductRecommendation } = require('./getProductRecommendation');


describe('getProductRecommendation', () => {
    test('should return recommended products for a valid product category', async () => {
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
    
        expect(res.status).toHaveBeenCalledWith(200); // Check if status is set to 200
        expect(res.json).toHaveBeenCalledWith(expect.any(Array)); // Check if response is an array
    }, 30000);
    
  
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
  },30000);

  
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
  },3000);

  test('should not return products for a negative age value', async () => {
    const req = {
      body: {
        productCategory: 'HairCare',
        productTargetedAge: -10, // Negative age value
        productTargetedSkinType: 'Normal',
        productTargetedConcerns: 'Dandruff'
      }
    };
    const res = {
      status: jest.fn(() => res),
      json: jest.fn()
    };

    await getProductRecommendation(req, res);

    expect(res.status).toHaveBeenCalledWith(200); 
    expect(res.json).toHaveBeenCalledWith([]); 
  },30000);

  
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
  },30000);

  
  test('should handle database errors gracefully', async () => {
    jest.mock('../../models/productModel', () => ({
      async find() {
        throw new Error('Database error');
      }
    }));

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
  },30000);
});
