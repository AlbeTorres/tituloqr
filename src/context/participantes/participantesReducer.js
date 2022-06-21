import { AÑADIR_PARTICIPANTE, CERRAR_MODIFICAR, MODIFICAR_PARTICIPANTE, OBTENER_PARTICIPANTES, OBTENER_PARTICIPANTES_BY_ID } from "../../types";
import { ABRIR_MODIFICAR, TERMINO_BUSQUEDA, ELIMINAR_PARTICIPANTE } from "../../types";


export default (state, action)=>{

    switch(action.type){
        case OBTENER_PARTICIPANTES:
            return{
                ...state,
                participantes: action.payload
            };
        case ABRIR_MODIFICAR:
            return{
                ...state,
                modificar:true,
                participante: state.participantes.filter(participante => participante._id == action.payload)
            };
        case CERRAR_MODIFICAR:
            return{
                ...state,
                modificar:false,
                idModificar:null
            };
        case TERMINO_BUSQUEDA:
            return{
                ...state,
                busqueda: action.payload
            };
        case ELIMINAR_PARTICIPANTE:
            return{
                ...state,
                participantes: state.participantes.filter(participante=> participante._id!==action.payload),
            };
        case AÑADIR_PARTICIPANTE:
            return{
                ...state,
                participantes: [...state.participantes,action.payload]
            };
        case MODIFICAR_PARTICIPANTE:
            return{
                ...state,
                participantes: state.participantes.map( participante=> {
                    return participante._id == action.payload._id ? (participante = action.payload): participante;
                })
            }
        default:
            return state;


    }


}