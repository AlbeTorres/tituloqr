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
} from "../../types";
import trabajosContext from './trabajosContext';
import {v4 as uuid4} from 'uuid';
import clienteAxios from '../../config/axios'


const TrabajosState = props =>{

    const trabajos =[
                    {
                        _id:1,
                        titulo: 'Abrir puerta',
                        integrantes:[1,2,]

                    },
                    {
                        _id:2,
                        titulo: 'Romper puerta',
                        integrantes:[1]

                    },
                    ]

    //Creando estado inicial
    const initialState={
        trabajos:[],
        modificar:false,
        seleccionar:false,
        busquedaT:'',
        trabajoM:[{id:'', titulo:'', integrantes:[]}],
        integrantes:[],
        

    }

    //Dispatch para ejecutar las acciones
    const [state, dispatch]= useReducer(trabajosReducer,initialState)

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

    const obtenerTrabajos=()=>{

        dispatch({
            type:OBTENER_TRABAJOS,
            payload: trabajos

        });
    }

    //eliminar trabajos

    const eliminarTrabajos=(id)=>{
        dispatch({
            type: ELIMINAR_TRABAJOS,
            payload:id

        });

    }

    //modificar Trabajo
    const modificarTrabajo=(idM, trabajo)=>{
        trabajo.id= idM;
        dispatch({
            type: MODIFICAR_TRABAJO,
            payload:trabajo
        })
        
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
            }}
        >
            {props.children}
        </trabajosContext.Provider>
    )
}

export default TrabajosState;