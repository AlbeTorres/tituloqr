import React,{useContext, useEffect} from 'react'
import IntegrantesCard from './IntegrantesCard';
import ParticipantesCardTrabajo from './ParticipantesCardTrabajo';
import trabajosContext from '../../context/trabajos/trabajosContext';
import participantesContext from '../../context/participantes/participantesContext';

function SeleccParticipantes() {

    const integranteauxContext = useContext(participantesContext);
    const {participantes,obtenerParticipantes}= integranteauxContext;

    const trabajoAuxContext = useContext(trabajosContext);
    const {trabajoM,cerrarSeleccionar}=trabajoAuxContext;


    useEffect(()=>{
        obtenerParticipantes();
    },[])

    const cerrarSeleccionarVer=()=>{

        if(listaIntegrantes.length){
            cerrarSeleccionar();
        }else{
            alert('No puedes crear un trabajo sin integrantes');
        }
    }


    const listaIntegrantes = participantes.filter(participante=> trabajoM[0].integrantes.includes(participante.id));
    const participantesAux = participantes.filter(participante=> !trabajoM[0].integrantes.includes(participante.id));

    return (
    <div className='relative grid grid-cols-2 min-h-full gap-x-3 '>
        <div className='relative '>
            <h1 className='p-4  text-4xl text-blue-800 font-bold'>Participantes</h1>
            <div className='absolute w-full h-72 bg-white overflow-y-scroll'>
            {(participantesAux.length !==0) ? participantesAux.map(participante=>(<ParticipantesCardTrabajo participante={participante}/>)):<h1>No hay Participantes</h1>}
                

            </div>

        </div>
        <div className='relative '>
            <h1 className='p-4 text-4xl text-blue-800 font-bold'>Integrantes</h1>
            <div className=' w-full h-72  bg-white overflow-y-scroll'>
                {(listaIntegrantes.length !==0) ? listaIntegrantes.map(participante=>(<IntegrantesCard participante={participante}/>)):<h1>No hay integrantes</h1>}
                
            </div>
            <button className='bg-blue-800 text-white rounded-sm px-2 py-1 absolute right-6  bottom-2' onClick={cerrarSeleccionarVer} >Aceptar</button>
            
        </div>
        
    </div>
    )
}

export default SeleccParticipantes;