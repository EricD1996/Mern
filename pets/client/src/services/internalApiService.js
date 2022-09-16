import axios from 'axios';

const http = axios.create({
    baseURL: 'http://localhost:8000/api',
});

export const getAllPet = async () => {
    const res = await http.get('/pet');
    return res.data;
}

export const getPetById = async (id) => {
    const res = await http.get(`/pet/${id}`);
    return res.data;
}

export const createPet = async (data) => {
    const res = await http.post('/pet', data);
    return res.data;
}

export const updatePetById = async (id, data) => {
    const res = await http.put(`/pet/${id}`, data);
    return res.data;
}

export const deletePetById = async (id) => {
    const res = await http.delete(`/pet/${id}`);
    return res.data;
}