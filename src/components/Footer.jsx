import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

        {/* Navigation Group 1 */}
        <div className="space-y-2">
          <h4 className="text-white font-semibold">Navigate</h4>
          <a href="/" className="block hover:text-white">Home</a>
          <a href="/products" className="block hover:text-white">Product</a>
          <a href="/sustainability" className="block hover:text-white">Sustainability</a>
          <a href="/about" className="block hover:text-white">About Us</a>
        </div>

        {/* Navigation Group 2 */}
        <div className="space-y-2">
          <h4 className="text-white font-semibold">Support</h4>
          <a href="/contact" className="block hover:text-white">Contact</a>
          <a href="/faq" className="block hover:text-white">FAQ</a>
          <a href="/returns" className="block hover:text-white">Shopping Return</a>
          <a href="/privacy-policy" className="block hover:text-white">Privacy Policy</a>
        </div>

        {/* Optional Extra Info */}
        <div className="md:col-span-2 lg:col-span-1 space-y-2">
          <h4 className="text-white font-semibold">About Our Company</h4>
          <p className="text-sm text-gray-400">
            We offer sustainable products with high quality & great customer service. 
            Find everything you need in one place and enjoy a seamless shopping experience.
          </p>
        </div>

      </div>

      {/* Copyright */}
      <div className="mt-8 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} YourBrand. All rights reserved.
      </div>
    </footer>
  );
}
