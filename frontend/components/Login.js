"use client";
import React, { useState, useContext } from 'react';
import axios from 'axios';
import { GlobalStateContext } from '../context/GlobalState';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const context = useContext(GlobalStateContext);

  if (!context) {
    throw new Error('GlobalStateContext is undefined. Ensure the component is wrapped in GlobalStateProvider.');
  }

  const { dispatch } = context;

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/users/login', { email, password });
      dispatch({ type: 'SET_USER', payload: res.data.user });
      localStorage.setItem('token', res.data.token);
      setError('');
    } catch (err) {
      setError(err.response?.data?.error || 'Login failed');
    }
  };

  return (
    
      <div className="w-full max-w-md bg-gradient-to-r from-uefa-blue to-light-blue p-8 rounded-lg shadow-lg space-y-6">
        <h2 className="text-3xl font-bold text-center text-white">Login</h2>
        {error && <p className="text-red-500 text-center">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-dark-grey">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="mt-1 block w-full px-4 py-2 bg-grey border border-dark-grey rounded-lg focus:outline-none focus:ring-2 focus:ring-custom-color focus:border-transparent text-black" 
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-dark-grey">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
              className="mt-1 block w-full px-4 py-2 bg-grey border border-dark-grey rounded-lg focus:outline-none focus:ring-2 focus:ring-custom-color focus:border-transparent text-black" 
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 font-semibold text-white bg-uefa-blue rounded-lg hover:bg-light-blue transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-custom-color"
          >
            Login
          </button>
        </form>
        <p className="text-center text-sm text-grey">
          Don't have an account? <a href="/register" className="text-uefa-blue hover:underline">Register</a>
        </p>
      </div>
    
  );
};

export default Login;
