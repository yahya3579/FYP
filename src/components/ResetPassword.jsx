import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';

const API_URL = 'https://localhost:7099/api/Auth';

export default function ResetPassword() {
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');
    
    const navigate = useNavigate();
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const email = queryParams.get('email');
    const token = queryParams.get('token');

    useEffect(() => {
        console.log("Email:", email, "Token:", token); // Debugging
    }, [email, token]);

    // Prevent page access if email or token is missing
    if (!email || !token) {
        return (
            <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-cover bg-center bg-no-repeat"
                 style={{ backgroundImage: "url('/foodatreset.jpg')" }}>
                <div className="bg-white bg-opacity-90 backdrop-blur-sm rounded-3xl shadow-lg overflow-hidden w-full max-w-md p-10">
                    <h2 className="text-xl font-bold text-center text-red-600">Invalid Reset Link</h2>
                    <p className="text-center text-gray-600">Please check your email for a valid password reset link.</p>
                </div>
            </div>
        );
    }

    const handleResetPassword = async (e) => {
        e.preventDefault();
        setError('');
        setMessage('');

        if (!newPassword || !confirmPassword) {
            setError('Please fill in all fields.');
            return;
        }

        if (newPassword.length < 6) {
            setError('Password must be at least 6 characters long.');
            return;
        }

        if (newPassword !== confirmPassword) {
            setError('Passwords do not match.');
            return;
        }

        try {
            setLoading(true);
            const response = await axios.post(
                `${API_URL}/reset-password`, 
                { email, token, newPassword },
                { headers: { 'Content-Type': 'application/json' } }
            );

            setMessage(response.data.message || 'Password reset successful. Redirecting...');
            setTimeout(() => navigate('/login'), 3000); // Redirect to login after success
        } catch (err) {
            setError(err?.response?.data?.message || 'Failed to reset password.');
        } finally {
            setLoading(false);
        }
    };

    const handleBackToLogin = () => {
        navigate('/login');
    };

    return (
        <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-cover bg-center bg-no-repeat"
             style={{ backgroundImage: "url('/foodatreset.jpg')" }}>
            <div className="bg-white bg-opacity-90 backdrop-blur-sm rounded-3xl shadow-lg overflow-hidden w-full max-w-md p-10">
                <form onSubmit={handleResetPassword} className="flex flex-col items-center justify-center h-full">
                    <h1 className="text-3xl font-bold mb-4">Reset Password</h1>

                    {error && <div className="text-red-500 text-sm mb-4">{error}</div>}
                    {message && <div className="text-green-500 text-sm mb-4">{message}</div>}

                    <input 
                        type="password" 
                        placeholder="Enter new password" 
                        value={newPassword} 
                        onChange={(e) => setNewPassword(e.target.value)} 
                        className="bg-gray-100 border-none mb-2 p-3 text-sm rounded-lg w-full outline-none"
                        disabled={loading}
                        required
                    />

                    <input 
                        type="password" 
                        placeholder="Confirm new password" 
                        value={confirmPassword} 
                        onChange={(e) => setConfirmPassword(e.target.value)} 
                        className="bg-gray-100 border-none mb-2 p-3 text-sm rounded-lg w-full outline-none"
                        disabled={loading}
                        required
                    />

                    <div className="flex space-x-4 mt-4 w-full justify-center">
                        <button
                            type="button"
                            onClick={handleBackToLogin}
                            className="text-sm text-gray-600 hover:text-black"
                            disabled={loading}
                        >
                            Back to Login
                        </button>

                        <button 
                            type="submit" 
                            className={`bg-black text-white text-xs py-2 px-8 rounded-lg font-semibold uppercase tracking-wide cursor-pointer ${loading ? 'opacity-70' : ''}`}
                            disabled={loading}
                        >
                            {loading ? 'Resetting...' : 'Reset Password'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}