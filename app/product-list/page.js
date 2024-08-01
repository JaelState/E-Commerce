"use client";

import React, { useState } from 'react';
import ProductList from '../../components/ProductList';

const ProductListPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortCriteria, setSortCriteria] = useState('name');
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div className="min-h-screen bg-grey-100 text-dark-grey">
      <header className="bg-uefa-blue text-white py-6">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
          <h1 className="text-5xl font-extrabold mb-4 md:mb-0 text-center md:text-left tracking-wide">
            <span className="block text-7xl ">Final Project</span>
            <span className="block text-5xl text-light-blue">Product Store</span>
          </h1>
          <div className="flex flex-col md:flex-row items-center mt-4 md:mt-0">
            <input 
              type="text" 
              placeholder="Search products..." 
              value={searchTerm} 
              onChange={(e) => setSearchTerm(e.target.value)} 
              className="p-3 border border-grey-300 rounded-lg mb-4 md:mb-0 md:mr-4 flex-grow text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-light-blue"
            />
            <select 
              value={sortCriteria} 
              onChange={(e) => setSortCriteria(e.target.value)}
              className="p-3 border border-grey-300 rounded-lg bg-white text-black focus:outline-none focus:ring-2 focus:ring-light-blue"
            >
              <option value="name">Sort by Name</option>
              <option value="price">Sort by Price</option>
            </select>
          </div>
        </div>
      </header>
      <div className="max-w-6xl mx-auto py-12 px-4">
        <ProductList 
          searchTerm={searchTerm} 
          sortCriteria={sortCriteria} 
          currentPage={currentPage}
          onPageChange={setCurrentPage}
        />
      </div>
    </div>
  );
}

export default ProductListPage;
