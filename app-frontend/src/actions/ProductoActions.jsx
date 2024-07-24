import HttpCliente from '../servicios/HttpClient';

export const getProductos = (request) => {
    return new Promise((resolve, reject) => {
        HttpCliente.get(`/api/Producto?pageIndex=${request.pageIndex}&pageSize=${request.pageSize}&search=${request.search}`)
            .then(response => {
                resolve(response.data);
            })
            .catch(error => {
                reject(error);
            })
    })
};