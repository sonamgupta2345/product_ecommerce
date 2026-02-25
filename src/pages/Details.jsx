import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Details() {
  const [product, setProduct] = useState({})
  const { id } = useParams();

  useEffect(
    () => {
      axios.get(`https://dummyjson.com/products/${id}`)
        .then(
          (response) => {
            setProduct(response.data)
          }
        )
        .catch(
          (error) => {
            setProduct({})
          }
        )
    },
    [id]
  )

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Image */}
        <div className="bg-white rounded-xl shadow p-6">
          <img src={product?.thumbnail} alt={product.title} className="w-full rounded-lg shadow-md" />
        </div>
        {/* Details */}
        <div>
          <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
          <p className="text-sm text-gray-500 mb-3">{product.category}</p>

          <div className="flex items-center gap-3 mb-4">
            <span className="text-xl font-semibold text-indigo-600">
              ${product.price}
            </span>

            {product.price && product.discountPercentage && (
              <>
                <span className="line-through text-gray-400">
                  $
                  {(product.price * (1 + product.discountPercentage / 100)).toFixed(2)}
                </span>
                <span className="text-red-500">
                  {product.discountPercentage}% off
                </span>
              </>
            )}
          </div>


          <p className="mb-4">{product.description}</p>

          <p className="text-yellow-500 mb-4">⭐ {product.rating} / 5</p>

          {/* Reviews */}
          <div className="mt-12">
            <h2 className="text-lg font-semibold mb-2">Customer Reviews</h2>

            <div className="space-y-4">
            {product?.reviews?.map((rev, idx) => (
              <div key={idx} className="border-t py-2">
                <p className="font-medium text-yellow-500">
                  {rev.rating} / 5
                </p>
                <p className="text-sm text-gray-600">{rev.comment}</p>
                <p className="text-sm text-gray-500 mt-2">
                  {rev.reviewerName}
                </p>
              </div>
            ))}
            </div>
          </div>



          {/* Buttons */}
          <div className="mt-6 flex gap-4">
            <button className="bg-indigo-600 text-white px-5 py-3 rounded-lg">
              Add to Cart
            </button>
            <button className="border border-indigo-600 text-indigo-600 px-5 py-3 rounded-lg">
              Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
