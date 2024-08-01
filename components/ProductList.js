"use client";

import React, { useEffect, useState } from 'react';
import axios from '../frontend/utils/axios';
import ProductCart from './ProductCart';

const ProductList = ({ searchTerm, sortCriteria, currentPage, onPageChange }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const productsPerPage = 10;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/products');
        setProducts(res.data);
      } catch (err) {
        console.error(err);
      }
    };
  
    fetchProducts();
  }, []);

  useEffect(() => {
    let filtered = products.filter(product =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
      product.category.toLowerCase().includes(searchTerm.toLowerCase())
    );

    filtered.sort((a, b) => {
      if (sortCriteria === 'name') {
        return a.name.localeCompare(b.name);
      } else if (sortCriteria === 'price') {
        return a.price - b.price;
      }
      return 0;
    });

    setFilteredProducts(filtered);
  }, [products, searchTerm, sortCriteria]);

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const displayedProducts = filteredProducts.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {displayedProducts.map((product) => (
          <ProductCart key={product._id} product={product} />
        ))}
      </div>
      <div className="flex justify-center mt-8">
        {[...Array(totalPages).keys()].map((number) => (
          <button
            key={number}
            className={`px-4 py-2 mx-1 rounded-lg text-sm font-medium ${number + 1 === currentPage ? 'bg-uefa-blue text-white' : 'bg-grey-200 text-dark-grey border border-grey-300'} transition-colors hover:bg-light-blue hover:text-white`}
            onClick={() => onPageChange(number + 1)}
          >
            {number + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
