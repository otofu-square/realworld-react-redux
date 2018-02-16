import axios from 'axios';

export const client = axios.create({
  baseURL: 'https://conduit.productionready.io/api',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});
