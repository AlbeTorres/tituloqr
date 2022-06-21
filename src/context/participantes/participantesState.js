import React,{useReducer} from "react";
import participantesContext from './participantesContext';
import participantesReducer from "./participantesReducer";
import clienteAxios from '../../config/axios';

import { OBTENER_PARTICIPANTES, ABRIR_MODIFICAR, CERRAR_MODIFICAR,TERMINO_BUSQUEDA, 
    ELIMINAR_PARTICIPANTE,
    MODIFICAR_PARTICIPANTE,
    AÑADIR_PARTICIPANTE} from "../../types";






const ParticipantesState = props =>{

    


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
    const obtenerParticipantes = async () =>{
           try {

            const resolve = await clienteAxios.get('/api/participantes');
            console.log(resolve);

            dispatch({
                type:OBTENER_PARTICIPANTES,
                payload: resolve.data.participantes 
                    }  );
            
           } catch (error) {
            console.log(error);
            
           }
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
    const eliminarParticipante=async(id)=>{

        try {
            const resolve = await clienteAxios.delete(`/api/participantes/${id}`);
            console.log(resolve);
            dispatch({
                type:ELIMINAR_PARTICIPANTE,
                payload: id
            });
        
            
        } catch (error) {
            console.log(error)
            
        }
      
    }

    //Modificar participante

    const modificarParticipante = async(id, participante) =>{

        try {
            const resolve = await clienteAxios.patch(`/api/participantes/${id}`, participante);

            dispatch({
                type: MODIFICAR_PARTICIPANTE,
                payload: resolve.data
            });
        
            
        } catch (error) {
            console.log(error)
            
        }

        

    }

    //Añadir participante
    const añadirParticipante = async participante =>{
        

        try {

            const resolve = await clienteAxios.post('/api/participantes', participante);
            console.log(resolve)

            dispatch({
                type: AÑADIR_PARTICIPANTE,
                payload: resolve.data
            })
           
        } catch (error) {
            console.log(error);
            
        }
     
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