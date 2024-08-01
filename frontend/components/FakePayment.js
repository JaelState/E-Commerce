// C:\Users\Hp\final-project\frontend\components\FakePayment.js
import React, { useState } from 'react';

const FakePayment = ({ onSuccess }) => {
  const [isProcessing, setIsProcessing] = useState(false);

  const handlePayment = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      onSuccess();
    }, 2000); // Simulate a 2-second delay for processing
  };

  return (
    <div className="text-center">
      <button
        onClick={handlePayment}
        disabled={isProcessing}
        className={`w-full py-2 px-4 rounded-lg shadow-md transition-colors ${
          isProcessing ? 'bg-gray-500 cursor-not-allowed' : 'bg-uefa-blue hover:bg-light-blue'
        } text-white`}
      >
        {isProcessing ? 'Processing...' : 'Pay Now'}
      </button>
    </div>
  );
};

export default FakePayment;
