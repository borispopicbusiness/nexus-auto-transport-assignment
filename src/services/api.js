import axios from "axios";

const apiClient = axios.create({
    baseURL: "https://new.api.nexusautotransport.com/api/vehicles",
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
    },
});

export const getYears = async () => {
    const response = await apiClient.get(`/years`);
    return response.data.data;
};

export const getMakesByYear = async (year) => {
    const response = await apiClient.get(`/makes?year=${year}`);
    return response.data.data.map(argument => argument.name);
};

export const getModelsByYearAndMake = async (year, make) => {
    const response = await apiClient.get(`/models?year=${year}&make=${make}`);
    return response.data.data.map(argument => argument.model);
};

export const getModelsByPage = async (page) => {
    const response = await apiClient.get(`/models?page=${page}`);
    return response.data;
};
