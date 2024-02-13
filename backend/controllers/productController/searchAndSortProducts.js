const Product = require("../../models/productModel");

const searchAndSortProducts = async (req, res) => {
    try {
      const { productName, productCategory } = req.body;
      const { sortBy } = req.query;
  
      // Construct the match condition for searching
      const matchCondition = {};
      
      if (productCategory && productCategory.length > 0) {
        matchCondition.productCategory = productCategory;
      }
  
      if (productName && productName.length > 0) {
        const cleanedProductName = productName.replace(/\s+/g, " ").trim();
        matchCondition.productName = {
          $regex: new RegExp(cleanedProductName, "i"),
        };
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
      console.error(error);
      res.status(500).json("Server error");
    }
  };
  

module.exports = { searchAndSortProducts };
