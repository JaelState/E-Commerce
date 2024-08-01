// C:\Users\Hp\final-project\frontend\components\Checkout.js
import React from 'react';
import FakePayment from '../components/FakePayment';

const Checkout = () => {
  const handlePaymentSuccess = () => {
    alert('Payment Successful!');
  };

  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold text-uefa-blue mb-6">Checkout</h1>
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Payment Information</h2>
        <FakePayment onSuccess={handlePaymentSuccess} />
      </div>
    </div>
  );
};

export default Checkout;
