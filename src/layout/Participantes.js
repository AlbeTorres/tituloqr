import React,{useContext, useEffect} from 'react';
import BuscarP from '../components/participantes/BuscarP';
import FormularioP from '../components/participantes/FormularioP';
import Listap from '../components/participantes/Listap';
import participantesContext from '../context/participantes/participantesContext';
import authContext from '../context/auth/authContext';


const Participantes=()=> {

  //extraer participantes del estado inicial
  const participanteListContext = useContext(participantesContext);
  const {modificar} = participanteListContext;

  //obtener usuario que esta logueado
  const AuthContext = useContext(authContext);
  const {usuarioAutenticado} = AuthContext;

  useEffect(()=>{
    usuarioAutenticado();
  },[])
 
  return (

    <div className='grid grid-cols-3 w-full'>
      <div className={modificar ? ' wmax h-screen ':' col-span-2 h-screen '}>
        <div className=' bg-blue-800 shadow-xl grid justify-center items-center buscarp '>
          <BuscarP participante={true}/>
        </div>

        <div className= 'container'>
          <Listap />

        </div>

      </div>
      

      {modificar && <div className='wmax'>
          <FormularioP añadir={false}/> 

      </div>}

      <div className='wmax'>
        <FormularioP añadir={true}/>


      </div>

    </div>
  )
}

export default Participantes;