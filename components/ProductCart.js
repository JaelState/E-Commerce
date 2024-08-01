// C:\Users\Hp\final-project\components\ProductCart.js
"use client";
import React from 'react';
import Link from 'next/link';

const ProductCart = ({ product }) => {
  return (
    <Link href={`/product-details/${product._id}`}>
      <div className="block border border-gray-200 rounded-lg p-4 shadow-md bg-white transition-transform transform hover:scale-105">
        <img src={product.imageUrl} alt={product.name} className="w-full h-48 object-cover mb-4 rounded" />
        <h2 className="text-xl font-semibold text-uefa-blue">{product.name}</h2>
        <p className="text-dark-grey mt-2">{product.description}</p>
        <p className="text-lg font-bold text-uefa-blue mt-2">${product.price}</p>
        <p className="text-sm text-dark-grey mt-1">Category: {product.category}</p>
        <p className="text-sm text-dark-grey mt-1">Stock: {product.stock}</p>
        <span className="mt-4 inline-block bg-uefa-blue text-white py-2 px-4 rounded-lg shadow-md hover:bg-light-blue transition-colors">
          View Details
        </span>
      </div>
    </Link>
  );
};

export default ProductCart;
