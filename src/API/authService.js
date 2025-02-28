import axios from 'axios';

const API_URL = 'https://localhost:7099/api/Auth'; // Ensure this matches your backend API

const authService = {
    login: async (credentials) => {
        try {
            const response = await axios.post(`${API_URL}/login`, credentials);
            const { token } = response.data;
            if (token) {
                localStorage.setItem('token', token);
                return response.data;
            }
            return null;
        } catch (error) {
            throw new Error(error?.response?.data?.message || 'An error occurred during login');
        }
    },

    signup: async (userData) => {
        try {
            const response = await axios.post(`${API_URL}/register`, userData);
            return response.data;  // No token storage on signup to avoid security risks
        } catch (error) {
            throw new Error(error?.response?.data?.message || 'An error occurred during signup');
        }
    },

    BusinessLogin: async (credentials) => {
        try {
            const response = await axios.post(`${API_URL}/business/login`, credentials)
            const {token} = response.data
            if(token){
                localStorage.setItem('token', token)
                return response.data 
            }
            return null
        } catch (error) {
            throw new Error(error?.response?.data?.message || 'An error occurred during login')
        }
    },

    BusinessSignup: async (userData) => {
        try {
            const response = await axios.post(`${API_URL}/business/register`, userData)
            return response.data
        } catch (error) {
            throw new Error(error?.response?.data?.message || 'An error occurred during signup')
        }
    },

    ForgotPassword: async (email) => {
        try {
            const response = await axios.post(`${API_URL}/forget-password`, { email });
            return response.data;
        } catch (error) {
            throw new Error(error?.response?.data?.message || 'An error occurred during forgot password request');
        }
    },

    logout: () => {
        localStorage.removeItem('token');
    },

    getCurrentUser: () => {
        const token = localStorage.getItem('token');
        return token && !authService.isTokenExpired(token) ? token : null;
    },

    getUserIdFromToken: () => {
        const token = localStorage.getItem('token');
        if (!token || authService.isTokenExpired(token)) return null;

        try {
            const decoded = JSON.parse(atob(token.split('.')[1]));
            return decoded?.userId || decoded?.sub || null; // Some JWTs store userId as 'sub'
        } catch (error) {
            console.error('Failed to decode token:', error);
            return null;
        }
    },

    isTokenExpired: (token) => {
        try {
            const decoded = JSON.parse(atob(token.split('.')[1]));
            return decoded?.exp && Date.now() / 1000 >= decoded.exp;
        } catch (error) {
            console.error('Error decoding token:', error);
            return true;
        }
    },
    tokenExists: () => {
        const token = localStorage.getItem('token');
        return Boolean(token) && !authService.isTokenExpired(token);
    }
};

export default authService;