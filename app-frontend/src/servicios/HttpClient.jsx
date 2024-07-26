import axios from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_URL_BASE;

axios.interceptors.request.use( (config) => {
    const token_seguridad = window.localStorage.getItem('token');
    if(token_seguridad)
    {
        config.headers.Authorization = `Bearer ${token_seguridad}`;
        return config;
    }


}, error => {
    return Promise.reject(error);
})

const requestGenerico = {
    get: (url) => axios.get(url),
    post: (url, data) => axios.post(url, data),
    put: (url, data) => axios.put(url, data),
    delete: (url) => axios.delete(url),
}

export default requestGenerico;