import axios from 'axios';

export const request = axios.create({
    baseURL: 'http://localhost:5000',
    withCredentials: true,
});

export const requestCheckOut = async (data) => {
    const res = await request.post('/api/checkout', data);
    return res.data;
};
