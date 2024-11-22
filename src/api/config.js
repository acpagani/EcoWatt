import axios from 'axios';

const api = axios.create({
  baseURL: 'https://generous-life-654ce24f25.strapiapp.com/api', 
  timeout: 10000,
});

export default api;
