import React,{useContext, useEffect} from 'react';
import TrabajosCard from './TrabajosCard';
import trabajosContext from '../../context/trabajos/trabajosContext';

function ListaT() {

  const trabajoAuxContext=useContext(trabajosContext);
  const {modificar,trabajos,obtenerTrabajos,busquedaT}= trabajoAuxContext;
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
    <div className={ modificar ?' h-full w-full  bg-white overflow-y-scroll':'h-full w-full shadow-lg bg-white overflow-y-scroll grid grid-cols-2 justify-items-center  auto-rows-min'}>
       {
         (trabajosFilter.length!==0) ?
            
         trabajosFilter.map(trabajo=>(<TrabajosCard key={trabajo.id} trabajo={trabajo}/>))
        :
        <h1>No hay trabajos</h1>
            }


    </div>
  )
}

export default ListaT;