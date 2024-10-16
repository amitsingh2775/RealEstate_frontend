import axios from 'axios';

const API_URL = 'https://real-estae-backend-raom.vercel.app/'; // Backend API URL

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,  // Ensure credentials (cookies) are sent with the request
});

// Register
export const registerUser = async (name, email, password) => {
  const response = await api.post('/api/auth/register', { name, email, password });
  return response.data;
};

// Login
export const loginUser = async (email, password) => {
  const response = await api.post('/api/auth/login', { email, password });
  return response.data;
};

// Get all properties
export const getProperties = async () => {
  const response = await api.get('/api/property/properties');
  return response.data;
};

// Add a new property
export const addProperty = async (propertyData) => {
  const response = await api.post('/api/property/properties', propertyData);
  return response.data;
};

// Get user profile (authenticated)
export const getUserProfile = async () => {
  const response = await api.get('/api/auth/profile');  // Correct the API route to fetch user profile
  return response.data;
};

// Logout user
export const logoutUser = async () => {
  const response = await api.post('/api/auth/logout');  // API call to logout user
  return response.data;
};

export const getPropertyById = async (id) => {
    try {
      
      const response = await axios.get(`/api/property/properties/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching property:', error);
      throw error;
    }
  };

 
