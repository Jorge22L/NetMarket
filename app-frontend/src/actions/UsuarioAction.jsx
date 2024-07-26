import { type } from '@testing-library/user-event/dist/cjs/utility/type.js';
import HttpCliente from '../servicios/HttpClient';
import axios from 'axios';

const instancia = axios.create();
instancia.CancelToken = axios.CancelToken;
instancia.isCancel = axios.isCancel;

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
           reject(error.response);
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
