import axios, { AxiosError } from "axios";

const baseURL = "http://localhost:3001/";

const instance = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
    "Access-Control-Allow-Headers": "Authorization",
  },
});

instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

instance.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    if (error.status === 401 || error.status === 403) {
      localStorage.removeItem("token");
    }
    return Promise.reject(error);
  }
);

export default instance;
