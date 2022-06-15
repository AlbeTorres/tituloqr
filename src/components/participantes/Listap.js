import React, {useContext, useEffect} from 'react';
import  '../../index.css';
import ParticipantesCard from './ParticipantesCard';
import participantesContext from '../../context/participantes/participantesContext';

const Listap = () => {

  //extraer participantes del estado inicial
  const participanteListContext = useContext(participantesContext);
  const {busqueda,modificar,participantes,obtenerParticipantes} = participanteListContext;
  let participantesFilter=[];
  

  //Obtener participantes cuando carga el estado inicial
    useEffect(() => {
          obtenerParticipantes();
          
    }, []);

    if(busqueda!==""){ 
      participantesFilter = participantes.filter(participante=> { return Object.values(participante)
                                                                                .join(" ").toLowerCase()
                                                                                .includes(busqueda.toLowerCase())}); 
                                                                          console.log(participantesFilter)
                                                                              }else{
                                                                            participantesFilter= participantes;
                                                                          } 

      
    
    

    
  

  return (
    <div className={ modificar ?' h-full w-full  bg-white overflow-y-scroll':'h-full w-full shadow-lg bg-white overflow-y-scroll grid grid-cols-2 items-start place-items-start auto-rows-min'}>
      {
        (participantesFilter.length !==0) 
        ?
        participantesFilter.map(participante=>(<ParticipantesCard key={participante.id} participante={participante} />)) 
        :
        <h2>No hay Participantes</h2>
      }
      
    </div>
  )
}

export default Listap;