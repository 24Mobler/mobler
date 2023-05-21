import axios from 'axios';

// Check if the code is running on the client-side
const isClient = typeof window !== 'undefined';

// Create an instance of axios with headers
export const axiosInstance = axios.create({
  headers: {
    authorization: isClient ? `Bearer ${localStorage.getItem('token')}` : '',
  },
  baseURL: 'http://localhost:8080',
});
