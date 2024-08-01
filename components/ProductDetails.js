// C:\Users\Hp\final-project\components\ProductDetails.js

"use client";
import React, { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import axios from '../frontend/utils/axios';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { useCart } from '../frontend/context/CartContext';
import ReviewForm from '../frontend/components/ReviewForm';

const ProductDetails = () => {
  const { productid } = useParams();
  const router = useRouter();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [cartMessage, setCartMessage] = useState('');

  useEffect(() => {
    if (productid) {
      const fetchProduct = async () => {
        try {
          const res = await axios.get(`http://localhost:5000/api/products/${productid}`);
          setProduct(res.data);
          setLoading(false);
        } catch (err) {
          console.error(err);
          setError('Failed to load product data');
          setLoading(false);
        }
      };

      fetchProduct();
    }
  }, [productid]);

  const handleReviewSuccess = () => {
    // Refresh product reviews after successful review submission
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/products/${productid}`);
        setProduct(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchProduct();
  };

  const handleAddToCart = () => {
    addToCart(product);
    setCartMessage(`${product.name} has been added to the cart.`);
    setTimeout(() => setCartMessage(''), 3000); // Clear message after 3 seconds
  };

  if (loading) return <div className="flex justify-center items-center min-h-screen"><AiOutlineLoading3Quarters className="animate-spin text-4xl text-uefa-blue" /></div>;
  if (error) return <div className="text-red-500 text-center">{error}</div>;

  return (
    <div className="max-w-4xl mx-auto bg-white border border-gray-200 rounded-lg shadow-md p-6">
      <img src={product.imageUrl} alt={product.name} className="w-1/2 h-auto object-cover mb-4 rounded" />
      <h1 className="text-3xl font-bold text-uefa-blue mb-4">{product.name}</h1>
      <p className="text-lg text-dark-grey mb-4">{product.description}</p>
      <p className="text-2xl font-semibold text-uefa-blue mb-4">${product.price}</p>
      <p className="text-md text-dark-grey mb-4">Category: {product.category}</p>
      <p className="text-md text-dark-grey mb-4">Stock: {product.stock}</p>
      
      {/* Reviews Section */}
      {product.reviews && product.reviews.length > 0 && (
        <div className="mt-4">
          <h2 className="text-2xl font-bold text-uefa-blue mb-2">Reviews</h2>
          {product.reviews.map((review, index) => (
            <div key={index} className="border-b border-gray-200 py-2">
              <p className="text-md text-dark-grey">{review.comment}</p>
              <p className="text-sm text-dark-grey">- {review.username} ({review.rating} stars)</p>
            </div>
          ))}
        </div>
      )}

      {/* Review Form */}
      <div className="mt-6">
        <h2 className="text-2xl font-bold text-uefa-blue mb-4">Submit a Review</h2>
        <ReviewForm productId={productid} onReviewSuccess={handleReviewSuccess} />
      </div>

      <div className="mt-6 flex flex-col space-y-4">
        <button 
          onClick={handleAddToCart} 
          className="bg-uefa-blue text-white py-2 px-4 rounded-lg shadow-md hover:bg-light-blue transition-colors"
        >
          Add to Cart
        </button>
        <button 
          onClick={() => router.push('/cart')} // Navigate to the cart page
          className="bg-gray-200 text-dark-grey py-2 px-4 rounded-lg shadow-md hover:bg-gray-300 transition-colors"
        >
          Go to Cart
        </button>
        {cartMessage && <div className="text-green-500">{cartMessage}</div>}
      </div>
    </div>
  );
};

export default ProductDetails;
