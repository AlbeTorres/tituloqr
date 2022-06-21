import React,{useContext} from 'react';
import trabajosContext from '../../context/trabajos/trabajosContext';

function TrabajosCard({trabajo}) {
      const trabajoAuxContext= useContext(trabajosContext);
      const {abrirModificar, eliminarTrabajos}= trabajoAuxContext;

      const {_id,titulo}= trabajo;

      const modificarTrabajos=()=>{
        abrirModificar(_id)
      }

      const eliminarTrabajoID= (id)=>{
        eliminarTrabajos(id)

      }

  return (
    <div className='grid grid-rows-2 m-2 h-24  bg-blue-800 items-center relative shadow-lg rounded-sm w-11/12'>
          <div className='ml-4'>
            <h2 className=' text-white'>{titulo}</h2>
          </div>
          <div className='ml-4'>
            <button  className='mr-2 px-2 text-white bg-green-700 rounded-sm shadow-md text-sm ' onClick={modificarTrabajos} >Visualizar</button>
            <button className='mr-2 px-2 text-white bg-red-700 rounded-sm shadow-md text-sm' onClick={()=>eliminarTrabajoID(_id)} >Eliminar</button>
          </div>
        
    </div>
  )
}

export default TrabajosCard;