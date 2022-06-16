import { REGISTRO_ERROR, REGISTRO_EXITOSO,
    OBTENER_USUARIO, LOGIN_EXITOSO, LOGIN_ERROR, CERRAR_SESION } from "../../types";

import authReducer from "./authReducer";
import authContext from './authContext';
import { useReducer } from "react";
import clienteAxios from '../../config/axios'
import tokenAuth from "../../config/tokenAuth";

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

                localStorage.setItem('token', response.data.token)

                dispatch({
                    type: REGISTRO_EXITOSO,
                    payload: response.data,
                })

                
                usuarioAutenticado();
                
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

        //Retorna el usuario autenticado

        const usuarioAutenticado = async()=>{
            const token = localStorage.getItem('token');

            if(token){
                tokenAuth(token);
            }

            
             try {

                const respuesta = await clienteAxios.get('api/auth');
                console.log(respuesta);

                dispatch({
                    type: LOGIN_EXITOSO,
                     payload: respuesta.data.usuario
                 })
                
             } catch (error) {
                 console.log(error);
                 dispatch({
                     type: LOGIN_ERROR,
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