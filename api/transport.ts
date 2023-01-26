import axios from 'axios';

const BASE_URL = process.env.REACT_APP_HOST || 'http://localhost:7778';

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});
