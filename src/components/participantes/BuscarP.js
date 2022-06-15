import React,{ useContext} from 'react';
import {FaSearch} from 'react-icons/fa';
import participantesContext from '../../context/participantes/participantesContext';
import trabajosContext from '../../context/trabajos/trabajosContext';

const BuscarP =({participante})=> {

   //extraer participantes del estado inicial
    const participanteBusquedaContext = useContext(participantesContext);
    const { busqueda , insertarTermBusqueda } = participanteBusquedaContext;

    //estraer trabajos del estado inicial
    const trabajosBusquedaContext= useContext(trabajosContext);
    const { busquedaT, insertarTermTrabBusqueda}= trabajosBusquedaContext;

    const insertarBusqueda = e =>{

      if(!participante){
        insertarTermTrabBusqueda(e.target.value)

      }else{
        insertarTermBusqueda(e.target.value)

      }
    }

  return (
    <div className=' rounded-sm shadow-md w-full flex items-center bg-white  h-3/5 '>
        <input type='search' placeholder={ participante ? 'Buscar participante':'Buscar trabajo'} className='p-2 w-full h-full outline-none'
                value={participante ? busqueda: busquedaT} onChange={insertarBusqueda}  />
        <FaSearch className='mr-2'/>
    </div>
  )
}

export default BuscarP;