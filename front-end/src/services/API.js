import axios from "axios";

export const API = () =>
  axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    headers: {
      "Content-Type": "application/json",
    },
  });

// Request Interceptor
API.interceptors.request.use(
  (config) => {
    //get token from the local storage
    const token = localStorage.getItem("token");

    //if token is avilable attach the Bearer token to the headers
    if (token) config.headers.Authorization = `Bearer ${token}`;

    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// Response Interceptor

API.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      console.error("Session expired or unauthorized.");

      localStorage.removeItem("token");
    }
    return Promise.reject(error);
  },
);
