import React from 'react'
import { Link ,useNavigate} from 'react-router-dom'
import axios from "axios";

const ProductComponents = ({ product }) => {
    const Navigate = useNavigate();

    const handleDelete = (id) => {
        axios
          .delete(`http://localhost:5000/api/products/${id}`)
          .then((res) => windows.location.reload());
    }

    return (
        <div class="max-w-sm rounded overflow-hidden shadow-lg">
            <img src="https://th.bing.com/th/id/R.857b26dafe5b74439d5fcfc23b77aa1a?rik=cZdp5iaYNAxWTA&riu=http%3a%2f%2fwww.liveadmins.com%2fwp-content%2fuploads%2f2015%2f09%2fProduct-Launch.jpg&ehk=tqhzE2p1F9XQzyKdEXTPZHADJpLq8vcw3fLXgv25J%2bE%3d&risl=&pid=ImgRaw&r=0" />
            <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">{product.productName}</div>
                <p class="text-gray-700 text-base">
                    Price: {product.productPrice}
                </p>
                <p class="text-gray-700 text-base">
                    Category: {product.productCategory}
                </p>
            </div>
            <div class="px-6 pt-4 pb-2">
                <Link
                to={`/dashboard/products/details/${product.productId}`}
                    className="bg-amber-600 text-white px-3 py-1 rounded-md">
                    Details
                </Link>
                <Link to={`/dashboard/products/update/${product.productId}`} class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Update</Link>
                <Link
                    onClick={() => handleDelete(product.productId)}
                    className="bg-red-600 text-white px-3 py-1 rounded-md">
                    Delete
                </Link>
            </div>
        </div>
    )
}

export default ProductComponents