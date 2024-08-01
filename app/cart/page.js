// C:\Users\Hp\final-project\app\cart\page.js
"use client";
import React from 'react';
import { useRouter } from 'next/navigation';
import { useCart } from '../../frontend/context/CartContext';

const CartPage = () => {
  const { cartItems, removeFromCart, clearCart } = useCart();
  const router = useRouter();

  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold text-uefa-blue mb-4">Your Cart</h1>
      {cartItems.length === 0 ? (
        <p className="text-lg text-dark-grey">Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map((item, index) => (
            <div key={index} className="flex items-center justify-between border-b border-gray-200 py-4">
              <div>
                <h2 className="text-xl font-bold text-uefa-blue">{item.product.name}</h2>
                <p className="text-md text-dark-grey">Quantity: {item.quantity}</p>
                <p className="text-lg text-dark-grey">${item.product.price}</p>
              </div>
              <button 
                onClick={() => removeFromCart(item.product._id)}
                className="bg-red-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-red-600 transition-colors"
              >
                Remove
              </button>
            </div>
          ))}
          <div className="flex justify-between mt-4">
            <button 
              onClick={clearCart}
              className="bg-red-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-red-600 transition-colors"
            >
              Clear Cart
            </button>
            <button 
              onClick={() => router.push('/checkout')}
              className="bg-green-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-green-600 transition-colors"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
