import axios from "axios";

export const API = axios.create({
  baseURL: 'http://127.0.0.1:8000/api/',
  headers: {'Content-Type': 'application/json'},
});

API.interceptors.request.use(function (config) {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
    }
});
