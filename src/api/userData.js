import api from "./config";

export const getUserDataDB = async (email) => {
    try {
        const response = await api.get(`/companies?filters[email][$eq]=${email}`)
        
        return response.data;
    } catch (error) {
        return error.response.data;
    }
};

export const getUserDataLS = () => {
    return JSON.parse(localStorage.getItem("user"));
};