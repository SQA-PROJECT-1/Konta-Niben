import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductRecommendationDisplay from "../components/ProductRecommendationDisplay";

const SelectInput = ({ name, label, value, onChange, options, required }) => (
  <div className="mb-4">
    <label htmlFor={name} className="block text-gray-700 font-bold mb-2">
      {label}:
    </label>
    <select
      name={name}
      id={name}
      value={value}
      onChange={onChange}
      className="w-full border border-gray-300 rounded-sm px-4 py-2 focus:outline-none focus:bg-white focus:border-blue-500"
      required={required}
    >
      <option value="">{`Select ${label}`}</option>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  </div>
);

const ProductRecommendationForm = () => {
    const [formData, setFormData] = useState({
      productCategory: "",
      productTargetedAge: "",
      productTargetedConcerns: "",
      productTargetedSkinType: "",
    });
    const [productCategories, setProductCategories] = useState([]);
    const [recommendedProducts, setRecommendedProducts] = useState([]);
  
    useEffect(() => {
      axios
        .get("http://localhost:5000/api/products")
        .then((response) => {
          const categories = [
            ...new Set(response.data.map((product) => product.productCategory)),
          ];
          setProductCategories(categories);
        })
        .catch((error) => {
          console.error("Error fetching products:", error);
        });
    }, []);
  
    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const response = await axios.post("http://localhost:5000/api/products/recommendations", formData);
          setRecommendedProducts(response.data);
        } catch (error) {
            console.log(error)
          console.error("An error occurred while fetching recommended products:", error);
          
        }
      };
      
  return (
    <div>
    <div className="mt-20 p-6 flex content-between gap-3">
      <div className="h-[500px] w-[600px] mx-16">
        <img src="../../src/assets/recommendation pic.jpg" alt="" />
      </div>
      <div className="border w-[600px] p-5">
        <form onSubmit={handleSubmit}>
          <SelectInput 
            name="productCategory"
            label="Product Category"
            value={formData.productCategory}
            onChange={handleChange}
            options={productCategories}
            required
          />
          <div className="mb-4">
            <label
              htmlFor="productTargetedAge"
              className="block text-gray-700 font-bold mb-2"
            >
              Age:
            </label>
            <input
              type="number"
              name="productTargetedAge"
              id="productTargetedAge"
              value={formData.productTargetedAge}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-sm px-4 py-2 focus:outline-none focus:bg-white focus:border-blue-500"
              required
            />
          </div>

          <SelectInput
            name="productTargetedSkinType"
            label="Skin Type"
            value={formData.productTargetedSkinType}
            onChange={handleChange}
            options={["Oily", "Dry", "Normal", "Sensitive", "Combination"]}
            required
          />
          <SelectInput
            name="productTargetedConcerns"
            label="Concerns"
            value={formData.productTargetedConcerns}
            onChange={handleChange}
            options={[
              "Acne",
              "Dryness",
              "Dehydration",
              "Dandruff",
              "Damaged Hair",
              "Hair fall",
              "Hyperpigmentation",
            ]}
            required
          />
          <button
            type="submit"
            className="bg-gray-800 text-white px-4 py-2 my-4 rounded-md hover:bg-gray-700 focus:outline-none focus:bg-blue-600"
          >
            Get Recommendations
          </button>
        </form>
      </div>
      </div>
      <div className="mt-10">
      <ProductRecommendationDisplay recommendedProducts={recommendedProducts} />
      </div>
    </div>
  );
 };
export default ProductRecommendationForm;
