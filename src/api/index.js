import axios from 'axios';

const API = axios.create({baseURL: 'https://chat-server-production-1f77.up.railway.app'});

API.interceptors.request.use( (req) => {
    if(localStorage.getItem('profile')){
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }

    return req; 
});

export const signIn = (FormData) => API.post('/user/signin', FormData);
export const signUp = (FormData) => API.post('/user/signUp', FormData); //googleAuth
export const googleAuth = (FormData) => API.post('/user/googleAuth', FormData);
