import { REGISTRO_ERROR, REGISTRO_EXITOSO,
    OBTENER_USUARIO, LOGIN_EXITOSO, LOGIN_ERROR, CERRAR_SESION } from "../../types";

import authReducer from "./authReducer";
import authContext from './authContext';
import { useReducer } from "react";
import clienteAxios from '../../config/axios'

    const AuthState= props=>{

        const initialState={
            token: localStorage.getItem('token'),
            autenticado: null,
            usuario: null,
            mensaje: null

        }

        const[state, dispatch]= useReducer(authReducer, initialState);

        //funciones
        const registrarUsuario=async datos=>{
            
            try {

                const response = await clienteAxios.post('api/usuarios/', datos);
                console.log(response);

                dispatch({
                    type: REGISTRO_EXITOSO,
                    payload: response.data,
                })
                
            } catch (error) {

                const alerta ={
                    msg: error.response.data.msg,
                    categoria: 'error'
                }

                dispatch({
                    type: REGISTRO_ERROR,
                    payload: alerta
                })
                
            }

        }


        return (
            <authContext.Provider
            value={{
                token: state.token,
                autenticado: state.autenticado,
                usuario: state.usuario,
                mensaje: state.mensaje,
                registrarUsuario,

            }}
            >{props.children}

            </authContext.Provider>
        );
    }

    export default AuthState;