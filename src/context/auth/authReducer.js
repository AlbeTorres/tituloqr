import { REGISTRO_ERROR, REGISTRO_EXITOSO,
     OBTENER_USUARIO, LOGIN_EXITOSO, LOGIN_ERROR, CERRAR_SESION } from "../../types";

export default (state, action)=>{

    switch(action.type){
        case LOGIN_EXITOSO:
            return({
                ...state,
                autenticado: true,
                mensaje: null,
                cargando: false
            });
        case REGISTRO_EXITOSO:
            return({
                ...state,
                autenticado: true,
                mensaje: {msg:'Usuario registrado correctamente', categoria:'fine'},
                cargando: false
            });
        case CERRAR_SESION:
            case LOGIN_ERROR:
                localStorage.removeItem('token');
                return({
                        ...state,
                        token: null,
                        usuario:null,
                        autenticado:null,
                        mensaje: action.payload,
                        cargando: false
                    });
        case REGISTRO_ERROR:
            return({
                ...state,
                mensaje: action.payload,
                cargando: false
            });

        case OBTENER_USUARIO:
            return({
                ...state,
                autenticado:true,
                usuario:action.payload,
                cargando: false
            })
        default:
            return state;

    }

}