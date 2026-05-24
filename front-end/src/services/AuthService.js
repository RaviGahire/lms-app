import API from "./API";

export const AuthService = {

    // Register a new user
    register: async (data) => {
        const response = await API.post('/auth/register', data);
        return response.data;
    },

    // Login an existing user
    login: async (data) => {
        // Adjusted the endpoint to standard RESTful naming convention
        const response = await API.post('/auth/login', data);
        return response.data;
    },

    // Update password
    forgotPassword: async (data) => {
        const response = await API.put('/auth/forgot-password', data);
        return response.data;
    }
};