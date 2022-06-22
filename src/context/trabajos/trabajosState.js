import React,{useReducer} from "react";
import trabajosReducer from './trabajosReducer';
import { OBTENER_TRABAJOS, ABRIR_MODIFICAR, ABRIR_SELECCIONAR,CERRAR_SELECCIONAR,
CERRAR_MODIFICAR, TERMINO_BUSQUEDA,
AÑADIR_INTEGRANTES,
ELIMINAR_INTEGRANTES,
VINCULAR_INTEGRANTES,
ELIMINAR_TRABAJOS,
AÑADIR_TRABAJO,
MODIFICAR_TRABAJO,
VACIAR_INTEGRANTES,
TRABAJO_ID,
} from "../../types";
import trabajosContext from './trabajosContext';
import {v4 as uuid4} from 'uuid';
import clienteAxios from '../../config/axios'


const TrabajosState = props =>{


    //Creando estado inicial
    const initialState={
        trabajos:[],
        modificar:false,
        seleccionar:false,
        busquedaT:'',
        trabajoM:[{id:'', titulo:'', integrantes:[]}],
        integrantes:[],
        trabajoID: null,
        

    }

    //Dispatch para ejecutar las acciones
    const [state, dispatch]= useReducer(trabajosReducer,initialState)

    //Guardar Trabajo id
    const guardarTrabajoID= (id)=>{

        dispatch({
            type: TRABAJO_ID,
            payload:id
        });
    }

     //Abrir modificar
    const abrirModificar=(id)=>{
        dispatch({
            type:ABRIR_MODIFICAR,
            payload: id
            
        } );
    }
     //Abrir modificar
    const cerrarModificar=()=>{
        dispatch({
            type:CERRAR_MODIFICAR,
            
        } );
    }

    //Abrir seleccionar
    const abrirSeleccionar=(id)=>{

        dispatch({
                type: ABRIR_SELECCIONAR,
            });
    }

    //Cerrar Seleccionar
    const cerrarSeleccionar=()=>{
        dispatch({
            type: CERRAR_SELECCIONAR,
        });
    }

    //Insertar termino de busqueda
    const insertarTermTrabBusqueda = (term_busqueda)=>{
        dispatch({
            type:TERMINO_BUSQUEDA,
            payload:term_busqueda
        } );
    }

    //Añadir integrantes
    const añadirIntegrantes = (integranteID)=>{
        dispatch({
            type:AÑADIR_INTEGRANTES,
            payload:integranteID
        })

    }
    
    //Vincular Integrantes
    const vincularIntegrantes=()=>{
        dispatch({
            type:VINCULAR_INTEGRANTES,
            
        })
    }

    //eliminar integrantes
    const eliminarIntegrantes=(id)=>{
        dispatch({
            type: ELIMINAR_INTEGRANTES,
            payload: id
        })
    }

    //vaciar integrantes del trabajoM
    const vaciarIntegrantes=()=>{
        dispatch({
            type: VACIAR_INTEGRANTES,
        })
    }



    //Serie de funciones del Crud

    //Obtener trabajos

    const obtenerTrabajos=async()=>{

        try {
            const resolve =  await clienteAxios.get('/api/trabajos');
            console.log(resolve)

            dispatch({
                type:OBTENER_TRABAJOS,
                payload: resolve.data.trabajos
    
            });

        } catch (error) {
            console.log(error)
            
        }

      
    }

    //eliminar trabajos

    const eliminarTrabajos=async(id)=>{

        try {
            await clienteAxios.delete(`/api/trabajos/${id}`);
            
            dispatch({
                type: ELIMINAR_TRABAJOS,
                payload:id
    
            });
            
        } catch (error) {
            console.log(error)
            
        }
      

    }

    //modificar Trabajo
    const modificarTrabajo= async(id, trabajo)=>{
        
        try {

            const resolve = await clienteAxios.patch(`/api/trabajos/${id}`,trabajo);
            console.log(resolve)
            dispatch({
                type: MODIFICAR_TRABAJO,
                payload:resolve.data
            })
            
        } catch (error) {
            console.log(error);
            
        }

        
        
    }
    
    //añadir Trabajo
    const añadirTrabajo= async(trabajo)=>{
        
        try {
            
            const resolve = await clienteAxios.post('/api/trabajos', trabajo);
            console.log(resolve)
            dispatch({
                type: AÑADIR_TRABAJO,
                payload: resolve.data
            })
        } catch (error) {
            console.log(error)
            
        }
       

    }


    return(
        <trabajosContext.Provider
            value={{
                trabajos:state.trabajos,
                modificar:state.modificar,
                seleccionar:state.seleccionar,
                busquedaT:state.busquedaT,
                trabajoM:state.trabajoM,
                integrantes: state.integrantes,
                trabajoID: state.trabajoID,
                obtenerTrabajos,
                abrirModificar,
                cerrarModificar,
                abrirSeleccionar,
                cerrarSeleccionar,
                insertarTermTrabBusqueda,
                añadirIntegrantes,
                vincularIntegrantes,
                eliminarTrabajos,
                eliminarIntegrantes,
                añadirTrabajo,
                modificarTrabajo,
                vaciarIntegrantes,
                guardarTrabajoID,
            }}
        >
            {props.children}
        </trabajosContext.Provider>
    )
}

export default TrabajosState;