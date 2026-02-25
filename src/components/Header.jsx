import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
    const location = useLocation();
    console.log(location)
    const navitem = [
        {
            name: "Home",
            path: "/"
        },
        {
            name: "About",
            path: "/About"
        },
        {
            name: "Contact",
            path: "/Contact"
        }

    ]
    return (
        <header className="bg-white shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

                {/* Logo */}
                <Link to="/" className="text-2xl font-bold text-green-700">
                    Product Eco
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex space-x-8 text-gray-700">
                    {
                        navitem.map((item, index) => {
                            return (
                                <Link key={index} to={item.path} className={`text-gray-900 ${location.pathname === item.path ? "bg-amber-200 font-bold  text-white" : ""
                                    } hover:text-blue-500 transition px-4 py-2 rounded-3xl `}
                                >
                                    {item.name}
                                </Link>

                            )
                        })
                    }
                </nav>

                {/* Mobile Hamburger */}
                <div className="md:hidden">
                    <input type="checkbox" id="nav-toggle" className="peer hidden" />
                    <label htmlFor="nav-toggle" className="cursor-pointer block text-gray-800">
                        {/* Hamburger icon */}
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </label>

                    {/* Mobile Menu */}
                    <nav className="peer-checked:block hidden bg-white py-4 space-y-3 text-gray-700">
                        <Link to="/" className="block px-4 py-2 hover:text-gray-900">Home</Link>
                        <Link to="/product" className="block px-4 py-2 hover:text-gray-900">Product</Link>
                        <Link to="/sustainability" className="block px-4 py-2 hover:text-gray-900">Sustainability</Link>
                        <Link to="/about-us" className="block px-4 py-2 hover:text-gray-900">About Us</Link>
                        <Link to="/contact" className="block px-4 py-2 hover:text-gray-900">Contact</Link>
                    </nav>
                </div>

            </div>
        </header>
    );
}
