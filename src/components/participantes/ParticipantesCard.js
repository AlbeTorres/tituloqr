import React,{useContext} from 'react';
import participantesContext from '../../context/participantes/participantesContext';

const ParticipantesCard = ({participante}) => {

  //extraer participantes del estado inicial
  const participanteListContext = useContext(participantesContext);
  const {abrirModificar, eliminarParticipante} = participanteListContext;

  const {id,nombre, categoria}= participante;

  const abrirModificarID =(id)=>{
    abrirModificar(id);
  }

  const eliminarParticipanteID=(id)=>{
    eliminarParticipante(id);

    console.log(`eliminado ${id}`)

  }

  return (
    <div className='grid grid-cols-3 m-2 h-24  bg-blue-800 items-center relative shadow-lg rounded-sm'>
        <figure className=' w-9/12 p-2 '>
            <img src='usuario-sin-foto.png' alt='' className='h-full w-full rounded-sm  bg-white'/>
        </figure>
        <div className='col-span-2 col-start-2 absolute -left-7'>
          <div>
            <h2 className=' text-white'>{nombre}</h2>
            <p className='text-white text-sm'>{categoria}</p>
          </div>
          <div>
            <button onClick={()=>abrirModificarID(id)} className='mr-2 px-2 text-white bg-green-700 rounded-sm shadow-md text-sm ' >Editar</button>
            <button onClick={()=>eliminarParticipanteID(id)} className='mr-2 px-2 text-white bg-red-700 rounded-sm shadow-md text-sm'>Eliminar</button>
          </div>
        </div>
    </div>
  )
}

export default ParticipantesCard;