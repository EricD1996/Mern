import axios from 'axios';

const http = axios.create({
    baseURL: 'http://localhost:8000/api',
});

export const getAllAuthor = async () => {
    const res = await http.get('/author');
    return res.data;
}

export const getAuthorById = async (id) => {
    const res = await http.get(`/author/${id}`);
    return res.data;
}

export const createAuthor = async (data) => {
    const res = await http.post('/author', data);
    return res.data;
}

export const updateAuthorById = async (id, data) => {
    const res = await http.put(`/author/${id}`, data);
    return res.data;
}

export const deleteAuthorById = async (id) => {
    const res = await http.delete(`/author/${id}`);
    return res.data;
}