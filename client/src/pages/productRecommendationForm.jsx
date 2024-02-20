import React, { useState, useEffect } from 'react';

const ProductRecommendationForm = ({ setRecommendedProducts, setError }) => {
    const [formData, setFormData] = useState({
        productCategory: '',
        productTargetedAge: '',
        productTargetedConcerns: '',
        productTargetedSkinType: ''
    });

    // Assuming you have functions to fetch product categories, concerns, and skin types from your backend
    const fetchProductCategories = async () => {
        // Fetch product categories from your backend
        // Example: const response = await fetch('/api/productCategories');
        // const data = await response.json();
        // Update the state with the fetched categories
        // setProductCategories(data);
    };

    const fetchConcerns = async () => {
        // Fetch concerns from your backend
        // Example: const response = await fetch('/api/concerns');
        // const data = await response.json();
        // Update the state with the fetched concerns
        // setConcerns(data);
    };

    const fetchSkinTypes = async () => {
        // Fetch skin types from your backend
        // Example: const response = await fetch('/api/skinTypes');
        // const data = await response.json();
        // Update the state with the fetched skin types
        // setSkinTypes(data);
    };

    useEffect(() => {
        fetchProductCategories();
        fetchConcerns();
        fetchSkinTypes();
    }, []);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('/api/productRecommendations', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (!response.ok) {
                throw new Error('Failed to fetch recommended products');
            }

            const data = await response.json();
            setRecommendedProducts(data);
        } catch (error) {
            setError('An error occurred while fetching recommended products');
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="productCategory">Product Category:</label>
                    <select name="productCategory" id="productCategory" value={formData.productCategory} onChange={handleChange}>
                        <option value="">Select Category</option>
                        {/* Map over product categories and render options */}
                    </select>
                </div>
                <div>
                    <label htmlFor="productTargetedAge">Age:</label>
                    <input type="number" name="productTargetedAge" id="productTargetedAge" value={formData.productTargetedAge} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="productTargetedConcerns">Concerns:</label>
                    <select name="productTargetedConcerns" id="productTargetedConcerns" value={formData.productTargetedConcerns} onChange={handleChange}>
                        <option value="">Select Concerns</option>
                        {/* Map over concerns and render options */}
                    </select>
                </div>
                <div>
                    <label htmlFor="productTargetedSkinType">Skin Type:</label>
                    <select name="productTargetedSkinType" id="productTargetedSkinType" value={formData.productTargetedSkinType} onChange={handleChange}>
                        <option value="">Select Skin Type</option>
                        {/* Map over skin types and render options */}
                    </select>
                </div>
                <button type="submit">Get Recommendations</button>
            </form>
        </div>
    );
};

export default ProductRecommendationForm;
