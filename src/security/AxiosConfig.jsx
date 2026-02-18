import axios from "axios";

const api = axios.create({
  baseURL: "http://34.229.121.198:8085",
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");

    // login & signup ke liye token nahi
    if (
      config.url.includes("/auth/login") ||
      config.url.includes("/signupuser")
    ) {
      return config;
    }

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

export default api;