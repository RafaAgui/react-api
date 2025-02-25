import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/pokemon/?limit=10', // Replace with your API's base URL
  timeout: 1000, // Set a timeout for requests
  headers: {
    'Content-Type': 'application/json'
  }
});

export default axiosInstance;