import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [username, setUsername] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/users/register', { username, name, email, password });
      setError('');
    } catch (err) {
      setError(err.response?.data?.error || 'Registration failed');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-radial from-uefa-blue to-light-blue flex items-center justify-center">
      <div className="w-full max-w-md bg-gradient-to-r from-uefa-blue to-light-blue p-8 rounded-lg shadow-lg space-y-6">
        <h2 className="text-3xl font-bold text-center text-white">Register</h2>
        {error && <p className="text-red-500 text-center">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-white">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Choose a username"
              required
              className="mt-1 block w-full px-4 py-2 bg-grey border border-dark-grey rounded-lg focus:outline-none focus:ring-2 focus:ring-custom-color focus:border-transparent text-black" 
            />
          </div>
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-white">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your full name"
              required
              className="mt-1 block w-full px-4 py-2 bg-grey border border-dark-grey rounded-lg focus:outline-none focus:ring-2 focus:ring-custom-color focus:border-transparent text-black" 
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-white">Email</label>
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
            <label htmlFor="password" className="block text-sm font-medium text-white">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              autoComplete="new-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Create a password"
              required
              className="mt-1 block w-full px-4 py-2 bg-grey border border-dark-grey rounded-lg focus:outline-none focus:ring-2 focus:ring-custom-color focus:border-transparent text-black" 
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 font-semibold text-white bg-custom-color rounded-lg hover:bg-light-blue transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-custom-color"
          >
            Register
          </button>
        </form>
        <p className="text-center text-sm text-grey">
          Already have an account? <a href="/login" className="text-uefa-blue hover:underline">Login</a>
        </p>
      </div>
    </div>
  );
};

export default Register;
