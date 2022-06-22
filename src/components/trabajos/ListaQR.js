import React,{useContext, useEffect} from 'react';
import TrabajoCardQR from './TrabajoCardQR';
import trabajosContext from '../../context/trabajos/trabajosContext';

function ListaQR() {
    const trabajoAuxContext=useContext(trabajosContext);
    const {trabajos,obtenerTrabajos,busquedaT}= trabajoAuxContext;
    let trabajosFilter=[];


     //obtener todos los trabajos cuando carga el estado inicial
  useEffect(()=>{
    obtenerTrabajos();
  },[]);

  if(busquedaT!==""){ 
    trabajosFilter = trabajos.filter(trabajo=> { return Object.values(trabajo)
                                                              .join(" ").toLowerCase()
                                                              .includes(busquedaT.toLowerCase())}); 
                                                            
                    }else{
                            trabajosFilter= trabajos;} 




  return (
    <div className=' h-full w-full  bg-white overflow-y-scroll'>
       {
         (trabajosFilter.length!==0) ?
            
         trabajosFilter.map(trabajo=>(<TrabajoCardQR key={trabajo._id} trabajo={trabajo}/>))
        :
        <h1>No hay trabajos</h1>
            }


    </div>
  )
}

export default ListaQR;