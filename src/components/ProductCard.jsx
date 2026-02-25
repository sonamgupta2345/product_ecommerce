// import React from 'react'
// import { Link } from 'react-router-dom';
// // import {ShopingCart} from 'luice/react'


// export default function ProductCard({ thumbnail, title, price}) {
//   return (
//     <Link to ="product/detail">
//     <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden">
//       {/* Product image */}
//       <img
//         src={thumbnail}
//         alt={title}
//         className="w-full h-48 object-cover"
//       />

//       {/* Card content */}
//       <div className="p-4">
//         {/* Title */}
//         <h3 className="text-lg font-semibold text-gray-800">{title}</h3>

//         {/* Price */}
//         <p className="text-gray-900 font-bold mt-2">${price}</p>

//         {/* Add to Cart button */}
//         <button
        
//           className="mt-4 w-full bg-blue-600 text-white font-medium py-2 rounded-lg hover:bg-blue-700 transition-colors">
//             {/* <ShoppingCart size={18}/> */}
//           Add to Cart
//         </button>
//       </div>
//     </div>
//     </Link>
//   );
// }



import React from "react";
import { Link } from "react-router-dom";

export default function ProductCard({thumbnail, title, price , id}) {
 
  return (
     
    <div className="w-64 bg-white rounded-xl shadow-md hover:shadow-xl transition p-4">
      {/* Thumbnail */}
      <Link to ={`/product/detail/${id}`}>
      <img
        src={thumbnail}
        alt="Product"
        className="w-full h-40 object-cover rounded-lg"
      />
        </Link>

      {/* Title */}
      <h2 className="mt-3 text-lg font-semibold text-gray-800">
        {title}
      </h2>

      {/* Price */}
      <p className="text-green-600 font-bold mt-1">
        {price}
      </p>

      {/* Add to Cart Button */}
      <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
        Add to Cart
      </button>
    </div>
 
  );
   
}

