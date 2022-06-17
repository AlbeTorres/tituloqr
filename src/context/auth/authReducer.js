import { REGISTRO_ERROR, REGISTRO_EXITOSO,
     OBTENER_USUARIO, LOGIN_EXITOSO, LOGIN_ERROR, CERRAR_SESION } from "../../types";

export default (state, action)=>{

    switch(action.type){
        case LOGIN_EXITOSO:
        case REGISTRO_EXITOSO:
            return({
                ...state,
                autenticado: true,
                mensaje: null,
            });
        case CERRAR_SESION:
        case LOGIN_ERROR:
        case REGISTRO_ERROR:
            localStorage.removeItem('token');
            return({
                ...state,
                token: null,
                usuario:null,
                autenticado:null,
                mensaje: action.payload
            });
            case OBTENER_USUARIO:
                return({
                    ...state,
                    autenticado:true,
                    usuario:action.payload
                })
        default:
            return state;

    }

}