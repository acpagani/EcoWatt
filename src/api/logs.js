import api from "./config";

export const getUserLogs = async (company) => {
    try {
        const response = await api.get(`/logs?filters[company][$eq]=${company}&sort[createdAt]=desc`)
        
        return response.data;
    } catch (error) {
        return error.response.data;
    }
};

export const getLogDetails = async (id) => {
    try {
        const response = await api.get(`/logs?filters[id][$eq]=${id}`);
        return response.data;
    } catch (error) {
        return error.response.data;
    }
};

export const createNewLog = async (company, content) => {
    try {
        const response = await api.post("/logs", {
            data: {
                company,
                content,
                sent: true
            }
        });
        return response.data;
    } catch (error) {
        return error.response.data;
    }
};