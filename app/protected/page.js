// app/pages/Protected.js
import React from 'react';
import ProtectedComponent from '../../frontend/components/ProtectedComponent';

const ProtectedPage = () => {
  return (
    <div>
      <h1>Protected Page</h1>
      <ProtectedComponent />
    </div>
  );
};

export default ProtectedPage;
