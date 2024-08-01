// C:\Users\Hp\final-project\frontend\components\ReviewForm.js

"use client";
import React, { useState } from 'react';
import axios from '../../frontend/utils/axios';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

const ReviewForm = ({ productId, onReviewSuccess }) => {
  const [username, setUsername] = useState('');
  const [rating, setRating] = useState(1);
  const [comment, setComment] = useState('');
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`/api/products/${productId}/reviews`, { username, rating, comment });
      setSuccessMessage('Review submitted successfully!');
      setUsername('');
      setRating(1);
      setComment('');
      setError(null);
      if (onReviewSuccess) onReviewSuccess();
    } catch (err) {
      console.error('Error submitting review:', err);
      setError('Failed to submit review');
      setSuccessMessage('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border p-2 rounded w-full"
          required
        />
      </div>
      <div className="flex items-center">
        <span className="mr-2">Rating:</span>
        {Array.from({ length: 5 }, (_, index) => index + 1).map((i) => (
          <span key={i} onClick={() => setRating(i)} className="cursor-pointer">
            {i <= rating ? <AiFillStar className="text-yellow-500" /> : <AiOutlineStar className="text-gray-300" />}
          </span>
        ))}
      </div>
      <div>
        <textarea
          placeholder="Comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="border p-2 rounded w-full"
          required
        />
      </div>
      {error && <p className="text-red-500">{error}</p>}
      {successMessage && <p className="text-green-500">{successMessage}</p>}
      <button type="submit" className="bg-uefa-blue text-white py-2 px-4 rounded-lg shadow-md hover:bg-light-blue transition-colors">
        Submit Review
      </button>
    </form>
  );
};

export default ReviewForm;
