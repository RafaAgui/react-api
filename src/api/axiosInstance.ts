import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://rickandmortyapi.com/api/character/', // Replace with your API's base URL
  timeout: 1000, // Set a timeout for requests
  headers: {
    'Content-Type': 'application/json'
  }
});

export default axiosInstance;