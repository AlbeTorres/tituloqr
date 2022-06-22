import { ABRIR_MODIFICAR,CERRAR_MODIFICAR, OBTENER_TRABAJOS, ABRIR_SELECCIONAR, 
    CERRAR_SELECCIONAR, 
    TERMINO_BUSQUEDA,
    AÑADIR_INTEGRANTES, 
    VINCULAR_INTEGRANTES,
    ELIMINAR_TRABAJOS,
    ELIMINAR_INTEGRANTES,
    AÑADIR_TRABAJO,
    VACIAR_INTEGRANTES,
    MODIFICAR_TRABAJO,
    TRABAJO_ID,} from "../../types";


export default (state, action)=>{
    
    switch(action.type){
        case OBTENER_TRABAJOS:
            return {
                ...state,
                trabajos: action.payload
            };
        case ABRIR_MODIFICAR:
            return {
                ...state,
                modificar:true,
                trabajoM: state.trabajos.filter(trabajo=>trabajo._id===action.payload)
            };
        case CERRAR_MODIFICAR:
            return {
                ...state,
                modificar:false,
                trabajoM: [{_id:'', nombre:'', integrantes:[]}]
                
            };
        case ABRIR_SELECCIONAR:
            return {
                ...state,
                seleccionar:true,
                
            };
        case CERRAR_SELECCIONAR:
            return{
                ...state,
                seleccionar:false

            };
        case TERMINO_BUSQUEDA:
            return{
                ...state,
                busquedaT:action.payload
            };
        case AÑADIR_INTEGRANTES:
            return{
                ...state,
                integrantes:[...state.integrantes,action.payload],
            };
        case VINCULAR_INTEGRANTES:
            return{
                ...state,
                trabajoM: [{...state.trabajoM[0],integrantes:[...state.trabajoM[0].integrantes,...state.integrantes]}],
                integrantes:[]
            };
        case ELIMINAR_TRABAJOS:
            return{
                ...state,
                trabajos: state.trabajos.filter(trabajo=> trabajo._id !==action.payload )
            };
        case ELIMINAR_INTEGRANTES:
            return{
                ...state,
                trabajoM: [{...state.trabajoM[0], integrantes: state.trabajoM[0].integrantes.filter(integrante => integrante != action.payload)}]
            };
        case VACIAR_INTEGRANTES:
            return{
                ...state,
                trabajoM: [{_id:'', nombre:'', integrantes:[]}],
            };
        case AÑADIR_TRABAJO:
            return{
                ...state,
                trabajos: [...state.trabajos, action.payload]
            };
        case MODIFICAR_TRABAJO:
            return{
                ...state,
                trabajos:state.trabajos.map(trabajo=>{
                    return trabajo._id== action.payload._id ? (trabajo= action.payload): trabajo;
                })
            };

        case TRABAJO_ID:
            return{
                ...state,
                trabajoID: action.payload
            }
        default:
            return state;
    }
}