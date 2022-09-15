import axios from 'axios';

const http = axios.create({
    baseURL: 'http://localhost:8000/api',
});

export const getAllProductManager = async () => {
    const res = await http.get('/productmanager');
    return res.data;
}

export const getProductManagerById = async (id) => {
    const res = await http.get(`/productmanager/${id}`);
    return res.data;
}

export const createProductManager = async (data) => {
    const res = await http.post('/productmanager', data);
    return res.data;
}

export const updateProductManagerById = async (id, data) => {
    const res = await http.put(`/productmanager/${id}`, data);
    return res.data;
}

export const deleteProductManagerById = async (id) => {
    const res = await http.delete(`/productmanager/${id}`);
    return res.data;
}