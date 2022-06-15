import React,{useContext} from 'react';
import BuscarP from '../components/participantes/BuscarP';
import FormularioT from '../components/trabajos/FormularioT';
import ListaT from '../components/trabajos/ListaT';
import SeleccParticipantes from '../components/trabajos/SeleccParticipantes';
import trabajosContext from '../context/trabajos/trabajosContext';

const Trabajos = () => {

    const trabajoAuxContext= useContext(trabajosContext);
    const {modificar,seleccionar} = trabajoAuxContext;


  return (
    <div className='grid grid-cols-3 w-full'>
        <div className= { modificar ? 'wmax h-screen ':' col-span-2 h-screen'}>
            <div className='bg-blue-800 shadow-xl grid justify-center items-center buscarp '>
                <BuscarP/>
            </div>
            <div className= 'container'>
                <ListaT/>
        
            </div>
        </div>
        {modificar && <div className='wmax'>
            <FormularioT/>


        </div>}

         <div className='wmax'>
            <FormularioT añadir={true}/>


        </div>

       { seleccionar && <div className='absolute w-8/12 shadow- bg-white h-4/6 self-center'>
            <SeleccParticipantes/>


        </div>} 

    </div>
)
}

export default Trabajos;