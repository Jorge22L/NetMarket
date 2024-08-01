import axios from 'axios';
import HttpCliente from '../servicios/HttpClient';
import { uploadImage } from '../firebase/index'

const instancia = axios.create();
instancia.CancelToken = axios.CancelToken;
instancia.isCancel = axios.isCancel;

export const actualizarProducto = async (id, producto) => {
    if(producto.file){
        const urlImage = await uploadImage(producto.file);
        producto.imagen = urlImage;
    }

    return new Promise((resolve, reject) => {

        HttpCliente.put(`/api/producto/${id.id}`, producto)
            .then(response => {
                resolve(response.data);
            })
            .catch(error => {
                reject(error.response);
            });
    })
}

export const registrarProducto = async (producto) => {
    const urlImage = await uploadImage(producto.file);
    producto.imagen = urlImage;

    return new Promise((resolve, reject) => {
        HttpCliente.post(`/api/producto`, producto)
            .then(response => {
                resolve(response.data);
            })
            .catch(error => {
                reject(error.response);
            });
    })
};

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

export const getProducto = id => {
    return new Promise( (resolve, reject ) => {
        instancia.get(`/api/Producto/${id.id}`)
        .then(response => {
            resolve(response.data);
        })
        .catch(error => {
            reject(error.response);
        })

        console.log(`/api/Producto/${id.id}`);
    })
}