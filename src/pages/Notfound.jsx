import React from 'react'
import { Link } from 'react-router-dom';

export default function NotFound404() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black text-white p-6">
      {/* Animated "404" */}
      <h1 className="text-[8rem] font-extrabold animate-pulse select-none text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-400">
        404
      </h1>

      {/* Message */}
      <p className="text-2xl md:text-3xl mt-4 font-semibold">
        Oops! Page not found.
      </p>
      <p className="text-gray-300 mt-2 text-center max-w-md">
        The page you’re looking for doesn’t exist or has been moved.
      </p>

      {/* Button */}
      <Link
        to="/"
        className="mt-6 inline-block px-8 py-3 bg-pink-600 hover:bg-pink-700 text-white font-semibold rounded-lg shadow-lg transition"
      >
        Go Back Home
      </Link>

      {/* Optional subtle floating circles animation */}
      <div className="absolute w-72 h-72 bg-pink-500 rounded-full opacity-20 animate-blob mix-blend-multiply top-10 left-10"></div>
      <div className="absolute w-72 h-72 bg-yellow-400 rounded-full opacity-20 animate-blob animation-delay-2000 mix-blend-multiply bottom-10 right-10"></div>
    </div>
  );
}
