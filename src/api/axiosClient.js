import axios from 'axios';

const axiosClient = axios.create({
  baseURL: 'http://localhost:8080/api/v1',
  headers: {
    'Content-Type': 'applicaion/json',
  },
  timeout: 5000,
});

export default axiosClient;