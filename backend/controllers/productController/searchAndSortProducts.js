const Product = require("../../models/productModel");

/**
 * Searches, filters, and sorts products based on given criteria.
 * @async
 * @function searchAndSortProducts
 * @param {object} req - Express request object containing product search and filter parameters.
 * @param {object} res - Express response object to send the search results.
 * @returns {Promise<void>} - Promise representing the completion of the function.
 * @throws {Error} - Throws an error if there's any issue during the execution.
 * @description This function performs a search, filter, and sort operation on products based on the provided criteria.
 * It extracts product search and filter parameters from the request body and query parameters.
 * It constructs a MongoDB aggregation pipeline to execute the search, filter, and sort operations.
 * The function first constructs a match condition based on the provided product category, brand name, and name (with regex match).
 * If price range parameters (priceMin and priceMax) are provided, it adds a price range filter to the match condition.
 * Then, it constructs the aggregation pipeline with the $match stage using the constructed match condition.
 * If sortBy parameter is provided and it's either 'productPrice' or 'productName', it adds a $sort stage to the pipeline based on the sortBy parameter.
 * Finally, it executes the aggregation pipeline using the Product model and sends the search results as a JSON response.
 * If any error occurs during the execution, it logs the error and sends a 500 status code with a 'Server error' message.
 */
  
const searchAndSortProducts = async (req, res) => {
  try {
      const { productName, productCategory, productBrandName, priceMin, priceMax } = req.body;
      const { sortBy } = req.query;

      // Construct the match condition for searching
      const matchCondition = {};

      const orConditions = [];

      if (productName && productName.length > 0) {
          const cleanedProductName = productName.replace(/\s+/g, " ").trim();
          orConditions.push({ productName: { $regex: new RegExp(cleanedProductName, "i") } });
      }

      if (productCategory && productCategory.length > 0) {
          orConditions.push({ productCategory });
      }

      if (productBrandName && productBrandName.length > 0) {
          orConditions.push({ productBrandName });
      }

      if (orConditions.length > 0) {
          matchCondition.$or = orConditions;
      }

      // Add price range filter to the match condition
      if (priceMin !== undefined && priceMax !== undefined) {
          matchCondition.productPrice = { $gte: parseInt(priceMin), $lte: parseInt(priceMax) };
      }

      // Construct the aggregation pipeline
      const pipeline = [];

      // Add the $match stage with the constructed match condition
      pipeline.push({
          $match: matchCondition
      });

      // Add the $sort stage based on sortBy parameter
      const sortOption = {};
      if (sortBy === "productPrice" || sortBy === "productName") {
          sortOption[sortBy] = 1;
          pipeline.push({
              $sort: sortOption
          });
      }

      // Execute the aggregation pipeline
      const searchResult = await Product.aggregate(pipeline);

      res.status(200).json(searchResult);
  } catch (error) {
     // console.error(error);
      res.status(500).json("Server error");
  }
};


module.exports = { searchAndSortProducts };
