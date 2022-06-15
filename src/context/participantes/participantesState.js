import React,{useReducer} from "react";
import participantesContext from './participantesContext';
import participantesReducer from "./participantesReducer";
import { v4 as uuidv4 } from "uuid";

import { OBTENER_PARTICIPANTES, ABRIR_MODIFICAR, CERRAR_MODIFICAR,TERMINO_BUSQUEDA, 
    OBTENER_PARTICIPANTES_BY_ID,
    ELIMINAR_PARTICIPANTE,
    MODIFICAR_PARTICIPANTE,
    AÑADIR_PARTICIPANTE} from "../../types";






const ParticipantesState = props =>{

    const participantes = [
        {   
            id:1,
            nombre:"Alberto Torres Reyes",
            categoria: 'Ingeniero',
            institucion: 'uci'
        },
    
        {   
            id:2,
            nombre:"Ricardo Benancio de la Cruz Reyes",
            categoria: 'Estudiante',
            institucion: 'uci'
        },
        {
            id:3,
            nombre:"Alberto Torres Reyes",
            categoria: 'Ingeniero',
            institucion: 'uci'
        }
    ]


    const initialState = {
        participantes: [],
        participante:[{id:'',nombre:'',institucion:'',categoria:''}],
        modificar:false,
        busqueda:"",
        idModificar:null,

    }

    //dispatch para ejecutar las acciones
    const [state, dispatch]= useReducer(participantesReducer, initialState)

    //serie de funciones para CRUD

    //Obtener participantes
    const obtenerParticipantes = () =>{
            dispatch({
                type:OBTENER_PARTICIPANTES,
                payload: participantes 
                    }  );
    }

    //Abrir modificar
    const abrirModificar=id=>{
        dispatch({
                type:ABRIR_MODIFICAR,
                payload:id
                
            } );
        }
    

    //Cerrar modificar
    const cerrarModificar=()=>{
        dispatch({
            type:CERRAR_MODIFICAR,
            
        } );
    }

 //Insertar termino de busqueda
    const insertarTermBusqueda = (term_busqueda)=>{
        dispatch({
            type:TERMINO_BUSQUEDA,
            payload:term_busqueda
        } );
    }

    //Eliminar Participante 
    const eliminarParticipante=(id)=>{
        dispatch({
            type:ELIMINAR_PARTICIPANTE,
            payload: id
        });
    }

    //Modificar participante

    const modificarParticipante =(id, participante) =>{

        participante.id = id
        dispatch({
            type: MODIFICAR_PARTICIPANTE,
            payload: participante
        });

    }

    //Añadir participante
    const añadirParticipante = participante =>{
        participante.id = uuidv4();

        dispatch({
            type: AÑADIR_PARTICIPANTE,
            payload: participante
        })
    }



    return(

        <participantesContext.Provider
            value={{
                participantes:state.participantes,
                participanteM: state.participante,
                modificar:state.modificar,
                busqueda:state.busqueda,
                idModificar:state.idModificar,
                obtenerParticipantes,
                abrirModificar,
                cerrarModificar,
                insertarTermBusqueda,
                eliminarParticipante,
                añadirParticipante,
                modificarParticipante,

            }}
        >
            {props.children}
        </participantesContext.Provider>
    )

}

export default ParticipantesState;