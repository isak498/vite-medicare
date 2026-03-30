import axiosInstance from "./axiosInstance";

export const authService = {
    // API Call to register a user
    registerUser: async (userData: any) => {
        const response = await axiosInstance.post("/users", userData);
        return response.data;
    },

    // Example of another reusable API call
    loginUser: async (credentials: any) => {
        const response = await axiosInstance.post("/login", credentials); // adjust endpoint as needed
        return response.data;
    }
};
