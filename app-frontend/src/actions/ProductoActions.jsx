import HttpCliente from '../servicios/HttpClient';
import axios from 'axios';

const instancia = axios.create();
instancia.CancelToken = axios.CancelToken;
instancia.isCancel = axios.isCancel;

export const getProductos = (request) => {
    return new Promise((resolve, reject) => {
        instancia.get(`/api/Producto?pageIndex=${request.pageIndex}&pageSize=${request.pageSize}&search=${request.search}`)
            .then(response => {
                resolve(response.data);
            })
            .catch(error => {
                reject(error);
            })
    })
};