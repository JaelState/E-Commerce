// C:\Users\Hp\final-project\app\page.js
"use client";
import React from 'react';
import Link from 'next/link';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <nav className="bg-uefa-blue text-white p-4 shadow-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-xl font-semibold">
            <Link href="/">Final Project</Link>
          </div>
          <div className="space-x-4">
            <Link href="/login" className="hover:text-light-blue transition-colors">Login</Link>
            <Link href="/register" className="hover:text-light-blue transition-colors">Register</Link>
            <Link href="/protected" className="hover:text-light-blue transition-colors">Protected</Link>
            <Link href="/product-list" className="hover:text-light-blue transition-colors">Product List</Link>
            <Link href="/checkout" className="hover:text-light-blue transition-colors">Checkout</Link>
            <Link href="/cart" className="hover:text-light-blue transition-colors">Cart</Link>
          </div>
        </div>
      </nav>

      <main className="flex-grow flex flex-col items-center justify-center p-6">
        <h1 className="text-4xl font-bold text-uefa-blue mb-4">Welcome to Our Store</h1>
        <p className="text-lg text-dark-grey mb-8">Explore our products and find the best deals! (lol)</p>
        <Link href="/product-list">
          <div className="px-6 py-3 bg-uefa-blue text-white rounded-lg shadow-md hover:bg-light-blue transition-colors">
            Browse Products
          </div>
        </Link>
      </main>

      <footer className="bg-gray-200 text-center p-4">
        <p className="text-dark-grey">&copy; 2024 Final Project. All rights reserved lol.</p>
      </footer>
    </div>
  );
};

export default HomePage;
