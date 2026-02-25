import React from "react";

export default function ProductSkeletonCard() {
  return (
    <div className="w-64 bg-white rounded-xl shadow-md p-4 animate-pulse">
      
      {/* Image Skeleton */}
      <div className="w-full h-40 bg-gray-300 rounded-lg"></div>

      {/* Title Skeleton */}
      <div className="mt-3 h-5 bg-gray-300 rounded w-3/4"></div>

      {/* Price Skeleton */}
      <div className="mt-2 h-4 bg-gray-300 rounded w-1/4"></div>

      {/* Button Skeleton */}
      <div className="mt-4 h-10 bg-gray-300 rounded-lg w-full"></div>
      
    </div>
  );
}
