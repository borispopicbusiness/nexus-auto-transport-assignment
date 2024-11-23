import axios from "axios";

const apiClient = axios.create({
    baseURL: "https://new.api.nexusautotransport.com/api/vehicles",
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
    },
});

export const getYears = async () => {
    const response = await apiClient.get("/years");
    return response.data.data;
};

export const getMakes = async (year) => {
    const response = await apiClient.get(`/makes?year=${year}`);
    debugger
    return response.data;
};

export const getModels = async (year, make) => {
    const response = await apiClient.get(`/models?year=${year}&make=${make}`);
    return response.data;
};

export const getModelsByPage = async (page) => {
    const response = await apiClient.get(`/models?page=${page}`);
    return response.data;
};
