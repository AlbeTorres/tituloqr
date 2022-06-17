import React,{useContext, useEffect} from 'react';
import Usuario from '../components/usuario/usuario';
import { Link } from 'react-router-dom';
import authContext from '../context/auth/authContext';


const Aside = () => {

     //obtener usuario que esta logueado
  const AuthContext = useContext(authContext);
  const {usuarioAutenticado,usuario} = AuthContext;

  useEffect(()=>{
    usuarioAutenticado();
  },[])
 

  return (
    <aside className='bg-blue-800 h-screen  w-fit relative'>
        <h1 className='p-7 text-4xl text-white font-bold'>TítulosQR</h1>
        <Link to={'/home'} className='pl-2   text-white block m-5' >Participantes</Link>
        <Link to={'/trabajos'} className=' pl-2   text-white block m-5' >Trabajos</Link>
        <Link to={'/qr'} className=' pl-2   text-white block m-5' >GenerarQR</Link>
        <Usuario usuario={usuario}/>
    </aside>
  )
}

export default Aside;