"use client";

import Image from "next/image";
import { ShoppingCart } from "./icons";

const ProductCard = ({ product }) => {
  const Icon = product.icon;

  return (
    <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition transform hover:scale-105 border border-gray-100 overflow-hidden">
      <div className="relative w-full h-56">
        <div className="absolute top-3 right-3 bg-indigo-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
          {product.category}
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-xl font-bold text-gray-900 truncate">{product.name}</h3>
          {Icon && <Icon className="w-5 h-5 text-indigo-500" />}
        </div>
        <p className="text-gray-500 text-sm mb-4 h-10 overflow-hidden">{product.description}</p>
        <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-100">
          <p className="text-2xl font-extrabold text-indigo-600">{product.price}</p>
          <button className="flex items-center bg-indigo-600 text-white px-4 py-2 rounded-xl text-sm font-semibold hover:bg-indigo-700 transition shadow-md">
            Add <ShoppingCart className="w-4 h-4 ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
