import HttpCliente from '../servicios/HttpClient';
import axios from 'axios';
import { uploadImage } from '../firebase/index';

const instancia = axios.create();
instancia.CancelToken = axios.CancelToken;
instancia.isCancel = axios.isCancel;

export const getUsuarioById = (id) => {
    return new Promise((resolve, reject) => {
        HttpCliente.get(`/api/usuario/account/${id.id}`)
        .then(response => {
            resolve(response.data);
        }).catch(error => {
            reject(error.response);
        })
    })
}

export const agregarRol = (id, rol, dispatch) => {
    return new Promise((resolve, reject) => {
        HttpCliente.put(`/api/usuario/role/${id.id}`, rol)
        .then(response => {
            dispatch({
                type: "ACTUALIZAR_USUARIO",
                nuevoUsuario: response.data,
                autenticado: true
            })
            resolve(response);
        }).catch(error => {
            reject(error.response);
        })
    })
}

export const getUsuarios = (request) => {
    return new Promise((resolve, reject) => {
        HttpCliente.get(`/api/usuario/pagination?pageIndex=${request.pageIndex}&pageSize=${request.pageSize}&search=${request.search}`)
        .then(response => {
            resolve(response.data);
        }).catch(error => {
            reject(error.response);
        })
    })
}

export const actualizarUsuario = async (id, usuario, dispatch) => {
    if(usuario.file){
        const urlImage = await uploadImage(usuario.file);
        usuario.imagen = urlImage;
    }

    return new Promise((resolve, reject) => {
        HttpCliente.put(`/api/usuario/actualizar/${id}`, usuario)
        .then(response => {
            dispatch({
                type: "ACTUALIZAR_USUARIO",
                nuevoUsuario: response.data,
                autenticado: true
            })
            resolve(response);
        }).catch(error => {
            reject(error.response);
        })
    })
}

export const registrarUsuario = (usuario, dispatch) => {
    return new Promise((resolve, reject) => {
       instancia.post(`/api/usuario/registrar`, usuario).then(response => {

        dispatch({
            type: "INICIAR_SESION",
            sesion: response.data,
            autenticado: true
        })

        resolve(response);
       }).catch(error => {
           reject(error.response);
       })
    });
}

export const login = (usuario, dispatch) => {
    return new Promise((resolve, reject) => {
       instancia.post(`/api/usuario/login`, usuario).then(response => {
        dispatch({
            type: "INICIAR_SESION",
            sesion: response.data,
            autenticado: true
        })
        resolve(response);
       }).catch(error => {
           dispatch({
                type: "ERROR_SESSION",
                error: error?.response || "Unknow error",
                autenticado:false
           });
           reject(error?.response || "Unknow error");
       })
    });
}

export const getUsuario = (dispatch) => {
    return new Promise((resolve, reject) => {
        HttpCliente.get(`/api/usuario`).then(response => {
            dispatch({
                type: "INICIAR_SESION",
                sesion: response.data,
                autenticado: true
            })
            resolve(response.data);
        }).catch(error => {
            reject(error.response);
        })
    })
}
