import api from "./config";

export const getSimulationData = async (company) => {
    try {
        const response = await api.get(`/simulations?filters[company][$eq]=${company}`)
        
        return response.data;
    } catch (error) {
        return error.response.data;
    }
};

export const createNewSimulation = async (company, totalUse, carbonEmitted, renewableEnergy, renewableEnergySource, peakDemandReduction) => {
    try {
        const response = await api.post("/simulations", {
            data: {
                company,
                totalUse,
                carbonEmitted,
                renewableEnergy,
                renewableEnergySource,
                peakDemandReduction
            }
        });
        return response.data;
    } catch (error) {
        return error.response.data;
    }
};