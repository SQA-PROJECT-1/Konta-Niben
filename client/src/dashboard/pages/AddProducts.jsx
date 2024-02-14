import React from 'react'
import axios from 'axios';
import { useLoaderData, useNavigate, useParams } from 'react-router-dom';


const AddProducts = () => {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData();

    axios.post(`http://localhost:5000/api/products`, {
      productId: form.productId.value,
      productName: form.productName.value,
      productPrice: form.productPrice.value,
      productCategory: form.productCategory.value,
      productSubCategory: form.productSubCategory.value,
      productDescription: form.productDescription.value,
      productBrandName: form.productBrandName.value,
      productQuantity: form.productQuantity.value,
    })
      .then((response) => {
        if (response.status === 201) {
          alert("Product  Added Successfully");
          navigate("/dashboard");
        } else {
          alert("Product not Added!");
        }
        //console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className=" bg-slate-100 pb-16  overflow-hidden flex items-center justify-center">
      <div className="bg-white lg:w-6/12 md:7/12  rounded-xl mt-10 mb-10">
        <form className="p-8 " onSubmit={handleSubmit}>
          <div className=' content-center text-2xl font-bold mb-4 md:mb-6 text-gray-800'>Product Information Form</div>
          <div className='lg:flex lg:justify-between'>
            <div className="flex flex-col items-start text-lg mb-4 md:mb-6">
              <label class="block text-gray-700 text-sm mb-2" for="bookName">
                Product Id
              </label>
              <input type="text" name="productId" className="bg-white border-2 rounded-lg border-slate-300 hover:border-slate-500 pl-2 py-1 md:py-2 focus:outline-none w-full" placeholder="Enter Book Name" required />
            </div>
            <div className="flex flex-col items-start text-lg mb-4 md:mb-6">
              <label class="block text-gray-700 text-sm mb-2" for="authorName">
                Product Name
              </label>
              <input type="text" name="productName" className="bg-white border-2 rounded-lg border-slate-300 hover:border-slate-500 pl-2 py-1 md:py-2 focus:outline-none w-full" placeholder="Enter Author Name" required />
            </div>
          </div>
          <div className='lg:flex lg:justify-between'>
            <div className="flex flex-col items-start text-lg mb-4 md:mb-6">
              <label class="block text-gray-700 text-sm mb-2" for="publishedYear">
                Product Price
              </label>
              <input type="text" name="productPrice" className="bg-white border-2 rounded-lg border-slate-300 hover:border-slate-500 pl-2 py-1 md:py-2 focus:outline-none w-full" placeholder="Enter Published Year" required />
            </div>
            <div className="flex flex-col items-start text-lg mb-4 md:mb-6">
              <label class="block text-gray-700 text-sm mb-2" for="bookCategory">
                Product Category
              </label>
              <input type="text" name="productCategory" className="bg-white border-2 rounded-lg border-slate-300 hover:border-slate-500 pl-2 py-1 md:py-2 focus:outline-none w-full" placeholder="Enter Book Category" required />
            </div>
          </div>
          <div className='lg:flex lg:justify-between'>
            <div className="flex flex-col items-start text-lg mb-4 md:mb-6">
              <label class="block text-gray-700 text-sm mb-2" for="bookLanguage">
                Product SubCategory
              </label>
              <input type="text" name="productSubCategory" className="bg-white border-2 rounded-lg border-slate-300 hover:border-slate-500 pl-2 py-1 md:py-2 focus:outline-none w-full" placeholder="Enter Book Category" required />

            </div>
            <div className="flex flex-col items-start text-lg mb-4 md:mb-6">
              <label class="block text-gray-700 text-sm mb-2" for="entryLanguage">
                Product Description
              </label>
              <input type="text" name="productDescription" className="bg-white border-2 rounded-lg border-slate-300 hover:border-slate-500 pl-2 py-1 md:py-2 focus:outline-none w-full" placeholder="Enter Book Category" required />
            </div>
          </div>
          <div className='lg:flex lg:justify-between'>
            <div className="flex flex-col items-start text-lg mb-4 md:mb-6">
              <label class="block text-gray-700 text-sm mb-2" for="bookLanguage">
                Product BrandName
              </label>
              <input type="text" name="productBrandName" className="bg-white border-2 rounded-lg border-slate-300 hover:border-slate-500 pl-2 py-1 md:py-2 focus:outline-none w-full" placeholder="Enter Book Category" required />

            </div>
            <div className="flex flex-col items-start text-lg mb-4 md:mb-6">
              <label class="block text-gray-700 text-sm mb-2" for="entryLanguage">
                Product Quantity
              </label>
              <input type="text" name="productQuantity" className="bg-white border-2 rounded-lg border-slate-300 hover:border-slate-500 pl-2 py-1 md:py-2 focus:outline-none w-full" placeholder="Enter Book Category" required />
            </div>
          </div>
          <button type="submit" className="border-gray-50 bg-gradient-to-b from-green-700 to-green-900 font-medium px-4 py-1 md:px-4 md:py-2 text-white w-2/5 rounded">Add Product</button>
        </form>
      </div>
    </div>
  )
}

export default AddProducts