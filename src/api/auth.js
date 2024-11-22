import api from "./config";

export const login = async (email, password) => {
  try {
    const response = await api.get(`/companies?filters[email][$eq]=${email}&filters[password][$eq]=${password}`)
    
    return response.data;
  } catch (error) {
    return error.response.data;
  }
}

export const signup = async (email, name, password, phone, pontuation = '0', category = 'Ainda não definido') => {
    try {
        const response = await api.post("/companies", {
            data: {
                email,
                name,
                password,
                category,
                pontuation,
                phone,
            }
        });
        return response.data;
    } catch (error) {
        return error.response.data;
    }
}

export const emailExists = async (email) => {
    try {
        const response = await api.get(`/companies?filters[email][$eq]=${email}`);        
        return response.data.data.length > 0;
    } catch (error) {
        return error.response.data;
    }
}