const Product = require('../../models/productModel')

/**
 * Creates a new product and saves it to the database.
 * @async
 * @function setProducts
 * @param {Object} req - The request object sent by the client.
 * @param {Object} req.body - The request body containing details of the product to be created.
 * @param {string} req.body.productId - The ID of the product.
 * @param {string} req.body.productName - The name of the product.
 * @param {number} req.body.productPrice - The price of the product.
 * @param {string} req.body.productCategory - The category of the product.
 * @param {string} req.body.productSubcategory - The subcategory of the product.
 * @param {string} req.body.productDescription - The description of the product.
 * @param {Object} res - The response object used to send data back to the client.
 * @returns {Promise<void>} A Promise that resolves when the new product is successfully created and saved, or rejects if an error occurs.
 * @throws {Error} If the required fields (productId, productName, productPrice) are missing in the request body, or if an error occurs during the creation and saving of the product.
 */
const setProducts = async (req, res) => {
    const { productId, productName, productPrice, productCategory, productSubcategory, productDescription ,productBrandName,productQuantity, productTargetedSkinType,productTargetedAge,productTargetedConcerns } = req.body;

    if (!productId || !productName || !productPrice || !productBrandName || !productQuantity) {
        return res.status(400).json({ error: "id, name, price and quantity fields are required." });
    }

    try {  
        const productObj = {
            productId: productId,
            productName: productName,
            productPrice: productPrice,
            productCategory: productCategory,
            productSubcategory: productSubcategory,
            productDescription: productDescription,
            productBrandName : productBrandName,
            productQuantity : productQuantity,
            productTargetedSkinType: productTargetedSkinType,
            productTargetedAge: productTargetedAge,
            productTargetedConcerns: productTargetedConcerns,
        };

        const newProduct = new Product(productObj);
        await newProduct.save();
        res.status(201).json(newProduct);
    } catch (error) {     
        res.status(500).send(error.message);
    }
}

module.exports = { setProducts };
