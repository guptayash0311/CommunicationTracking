import axios from "axios";

const API_BASE_URL = "http://127.0.0.1:8000/api";

export const fetchCompanies = () => axios.get(`${API_BASE_URL}/companies/`);
export const deleteCompany = (id) => axios.delete(`${API_BASE_URL}/companies/${id}/`);
export const fetchCommunicationMethods = () =>
  axios.get(`${API_BASE_URL}/methods/`);
export const logCommunication = (data) =>
  axios.post(`${API_BASE_URL}/logs/`, data);
export const fetchAllCommunications = () =>
    axios.get(`${API_BASE_URL}/logs/`);