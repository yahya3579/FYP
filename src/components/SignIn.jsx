import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { PlusCircleIcon, UserIcon, CodeBracketIcon, LinkIcon } from '@heroicons/react/24/outline';
import { useAuth } from '../App'; // Ensure this contains login logic
import authService from '../API/authService';

export default function SignIn({ isActive }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false); // State to track login success
  const navigate = useNavigate();
  const { login } = useAuth(); // Handle authentication logic

  useEffect(() => {
    if (success) {
      navigate('/dashboard'); // Navigate only after successful login
    }
  }, [success, navigate]); // Run effect when `success` changes

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await login({ email, PasswordHash: password });

      if (response?.token) {
        // Ensure login was successful
        setSuccess(true);
      } else {
        setError('Invalid login credentials'); // Handle incorrect login
      }
    } catch (err) {
      setError(err.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  const handleForgotPassword = () => {
    navigate('/forgot-password'); // Navigate to the ForgotPassword page
  };

  return (
    <div className={`absolute top-0 h-full transition-all duration-600 ease-in-out ${isActive ? 'left-0 opacity-0 z-1' : 'left-0 w-1/2 z-2'}`}>
      <form onSubmit={handleSubmit} className="bg-white flex flex-col items-center justify-center h-full px-10">
        <h1 className="text-3xl font-bold mb-4">Sign In</h1>

        {error && <div className="text-red-500 text-sm mb-4">{error}</div>}

        <div className="flex space-x-3 mb-5">
          <a href="#" className="border border-gray-300 rounded-lg p-2">
            <PlusCircleIcon className="w-5 h-5" />
          </a>
          <a href="#" className="border border-gray-300 rounded-lg p-2">
            <UserIcon className="w-5 h-5" />
          </a>
          <a href="#" className="border border-gray-300 rounded-lg p-2">
            <CodeBracketIcon className="w-5 h-5" />
          </a>
          <a href="#" className="border border-gray-300 rounded-lg p-2">
            <LinkIcon className="w-5 h-5" />
          </a>
        </div>

        <span className="text-xs mb-4">or use email password</span>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="bg-gray-100 border-none mb-2 p-3 text-sm rounded-lg w-full outline-none"
          disabled={loading}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="bg-gray-100 border-none mb-2 p-3 text-sm rounded-lg w-full outline-none"
          disabled={loading}
        />

        <button
          type="button"
          onClick={handleForgotPassword}
          className="text-sm text-gray-600 mb-4 hover:text-black"
          disabled={loading}
        >
          Forgot Your Password?
        </button>

        <button
          type="submit"
          className={`bg-black text-white text-xs py-2 px-8 rounded-lg font-semibold uppercase tracking-wide mt-4 cursor-pointer ${loading ? 'opacity-70' : ''}`}
          disabled={loading}
        >
          {loading ? 'Signing In...' : 'Sign In'}
        </button>
      </form>
    </div>
  );
}