import axios from "axios";

// Create a configured Axios instance
const axiosInstance = axios.create({
    // Replace with your actual backend URL when ready
    baseURL: "https://jsonplaceholder.typicode.com",
    timeout: 10000,
    headers: {
        "Content-Type": "application/json",
    },
});

// Optional: Add request interceptors (e.g., to attach auth tokens)
axiosInstance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("token");
        if (token && config.headers) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Optional: Add response interceptors (e.g., for global error handling)
axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        // Handle global errors here
        console.error("API Error in interceptor:", error);
        return Promise.reject(error);
    }
);

export default axiosInstance;
