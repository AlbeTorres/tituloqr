import { REGISTRO_ERROR, REGISTRO_EXITOSO,
     OBTENER_USUARIO, LOGIN_EXITOSO, LOGIN_ERROR, CERRAR_SESION } from "../../types";

export default (state, action)=>{

    switch(action.type){
        case REGISTRO_EXITOSO:
            return({
                ...state,
                autenticado: true,
                mensaje: null,
            });
        case LOGIN_ERROR:
        case REGISTRO_ERROR:
            localStorage.removeItem('token');
            return({
                ...state,
                token: null,
                mensaje: action.payload
            });
            case LOGIN_EXITOSO:
                return({
                    ...state,
                    usuario:action.payload
                })
        default:
            return state;

    }

}