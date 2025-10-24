"use client";
import React, { useState } from "react";
import Link from "next/link"; // ✅ import Link

const ShoppingCart = ({ className = "w-5 h-5 text-gray-600" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="9" cy="21" r="1"></circle>
    <circle cx="20" cy="21" r="1"></circle>
    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
  </svg>
);

const Menu = ({ className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <line x1="3" y1="12" x2="21" y2="12"></line>
    <line x1="3" y1="6" x2="21" y2="6"></line>
    <line x1="3" y1="18" x2="21" y2="18"></line>
  </svg>
);

const X = ({ className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);

const Zap = ({ className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
  </svg>
);

// --- Header Component ---
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = ["Products", "Categories", "About", "Contact"];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Zap className="text-indigo-600 w-6 h-6 mr-2" />
            <span className="text-2xl font-extrabold text-gray-900 tracking-tight">Central Shop</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <a key={item} href="#" className="text-gray-600 hover:text-indigo-600 font-medium transition">{item}</a>
            ))}
            {/* ✅ Login button now navigates to /login */}
            <Link
              href="/login"
              className="px-4 py-2 bg-indigo-600 text-white rounded-full font-semibold hover:bg-indigo-700 transition shadow-md text-sm"
            >
              Login
            </Link>
            <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition">
              <ShoppingCart className="w-5 h-5 text-gray-600" />
            </button>
          </div>

          {/* Mobile Nav Button */}
          <div className="md:hidden flex items-center">
            <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition mr-2">
              <ShoppingCart className="w-5 h-5 text-gray-600" />
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg absolute w-full z-40">
          <div className="px-4 pt-4 pb-3 space-y-2">
            {navItems.map((item) => (
              <a key={item} href="#" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-lg font-medium text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition">{item}</a>
            ))}
            <Link
              href="/login"
              onClick={() => setIsOpen(false)}
              className="block mt-2 px-3 py-2 rounded-lg text-white bg-indigo-600 font-bold text-center hover:bg-indigo-700 transition"
            >
              Login / Sign Up
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
