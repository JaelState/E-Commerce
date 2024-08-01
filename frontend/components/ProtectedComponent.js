"use client"
// frontend/components/ProtectedComponent.js
import React, { useEffect, useContext } from 'react';
import axios from '../utils/axios'; // Use the axios instance with interceptors
import { GlobalStateContext } from '../context/GlobalState';

const ProtectedComponent = () => {
  const { state } = useContext(GlobalStateContext);

  useEffect(() => {
    const fetchProtectedData = async () => {
      try {
        const res = await axios.get('/orders');
        console.log('Protected data:', res.data);
      } catch (err) {
        console.error('Failed to fetch protected data:', err);
      }
    };

    fetchProtectedData();
  }, []);

  return (
    <div>
      <h1>Protected Content</h1>
      {state.user ? <p>Welcome, {state.user.name}</p> : <p>Please log in</p>}
    </div>
  );
};

export default ProtectedComponent;
