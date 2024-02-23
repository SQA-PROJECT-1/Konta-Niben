// addOrUpdateReview.test.js
const { addOrUpdateReview } = require('../ReviewController/addReview');
const ProductReview = require('../../models/reviewModel');
const Product = require('../../models/productModel');

jest.mock('../../models/reviewModel');
jest.mock('../../models/productModel');

describe('addOrUpdateReview', () => {
    let mockReq;
    let mockRes;
    let mockReviewResult;

    beforeEach(() => {
        mockReq = {
            body: {
                productId: 'mockProductId',
                userId: 'mockUserId',
                message: 'Mock review message',
                rating: 4,
            },
        };

        mockRes = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn(),
        };

        // Replace the following line with your actual mock review result data
        mockReviewResult = {
            _id: 'mockReviewId',
            productId: 'mockProductId',
            userId: 'mockUserId',
            message: 'Mock review message',
            rating: 4,
        };
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    test('should add or update a review successfully', async () => {
        ProductReview.findOneAndUpdate.mockResolvedValue(mockReviewResult);
        ProductReview.find.mockResolvedValue([{ rating: 4 }, { rating: 5 }]);
        Product.findOneAndUpdate.mockResolvedValue({ averageRating: 4 });

        await addOrUpdateReview(mockReq, mockRes);

        expect(ProductReview.findOneAndUpdate).toHaveBeenCalled();
        expect(ProductReview.find).toHaveBeenCalled();
        expect(Product.findOneAndUpdate).toHaveBeenCalled();

        expect(mockRes.status).toHaveBeenCalledWith(200);
        expect(mockRes.json).toHaveBeenCalledWith({
            message: 'Review added or updated successfully',
            data: {
                review: mockReviewResult,
                averageRating: 4,
            },
        });
    });
    test('should return 400 if productId is missing in the request body', async () => {
        const req = {
            body: {
                userId: 'mockUserId',
                message: 'Mock review message',
                rating: 4,
            },
        };
    
        await addOrUpdateReview(req, mockRes);
    
        expect(mockRes.status).toHaveBeenCalledWith(400);
        expect(mockRes.json).toHaveBeenCalledWith({ message: 'productId is required in the request body' });
    });
    
    test('should return 400 if userId is missing in the request body', async () => {
        const req = {
            body: {
                productId: 'mockProductId',
                message: 'Mock review message',
                rating: 4,
            },
        };
    
        await addOrUpdateReview(req, mockRes);
    
        expect(mockRes.status).toHaveBeenCalledWith(400);
        expect(mockRes.json).toHaveBeenCalledWith({ message: 'userId is required in the request body' });
    });
    test('should add or update a review successfully without message field', async () => {
        const req = {
            body: {
                productId: 'mockProductId',
                userId: 'mockUserId',
                rating: 4,
            },
        };
    
        ProductReview.findOneAndUpdate.mockResolvedValue(mockReviewResult);
        ProductReview.find.mockResolvedValue([{ rating: 4 }, { rating: 5 }]);
        Product.findOneAndUpdate.mockResolvedValue({ averageRating: 4 });
    
        await addOrUpdateReview(req, mockRes);
    
        expect(ProductReview.findOneAndUpdate).toHaveBeenCalled();
        expect(ProductReview.find).toHaveBeenCalled();
        expect(Product.findOneAndUpdate).toHaveBeenCalled();
    
        expect(mockRes.status).toHaveBeenCalledWith(200);
        expect(mockRes.json).toHaveBeenCalledWith({
            message: 'Review added or updated successfully',
            data: {
                review: mockReviewResult,
                averageRating: 4,
            },
        });
    });
    
  test('should return 400 if rating is missing in the request body', async () => {
    const req = {
        body: {
            productId: 'mockProductId',
            userId: 'mockUserId',
            message: 'Mock review message',
        },
    };

    await addOrUpdateReview(req, mockRes);

    expect(mockRes.status).toHaveBeenCalledWith(400);
    expect(mockRes.json).toHaveBeenCalledWith({ message: 'rating is required in the request body' });
});

test('should return 400 if rating is not in the range of 0 to 5', async () => {
    const req = {
        body: {
            productId: 'mockProductId',
            userId: 'mockUserId',
            message: 'Mock review message',
            rating: -1, // Rating outside the valid range
        },
    };

    await addOrUpdateReview(req, mockRes);

    expect(mockRes.status).toHaveBeenCalledWith(400);
    expect(mockRes.json).toHaveBeenCalledWith({ message: 'Rating must be in the range of 0 to 5' });
});

  
     
});
