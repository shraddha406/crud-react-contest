import axios from 'axios';

const API_BASE_URL = 'https://your-api-endpoint.com';

export const login = async (mobile, otp) => {
  return axios.post(`${API_BASE_URL}/login`, { mobile, otp });
};

export const signup = async (name, mobile) => {
  return axios.post(`${API_BASE_URL}/signup`, { name, mobile });
};

export const getItems = async () => {
  return axios.get(`${API_BASE_URL}/items`);
};

export const getItemDetails = async (id) => {
  return axios.get(`${API_BASE_URL}/items/${id}`);
};

export const createItem = async (itemName) => {
  return axios.post(`${API_BASE_URL}/items`, { name: itemName });
};

export const updateItem = async (id, itemName) => {
  return axios.put(`${API_BASE_URL}/items/${id}`, { name: itemName });
};

export const deleteItem = async (id) => {
  return axios.delete(`${API_BASE_URL}/items/${id}`);
};
