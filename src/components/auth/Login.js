import React,{useState, useEffect, useContext} from 'react';
import {FaUserAlt,FaUnlock} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import AlertaContext from '../../context/alertas/alertasContext';
import '../../index.css'
import authContext from '../../context/auth/authContext';


const Login = () => {

    
    const alertaContext = useContext(AlertaContext);
    const{alerta, mostrarAlerta}= alertaContext;
    
    const AuthContext = useContext(authContext);
    const {autenticado,mensaje,iniciarSesion} = AuthContext;
    
    const history = useNavigate();
    
  useEffect(()=>{

    if (autenticado){
      history('/home');
    }

    if(mensaje){
      mostrarAlerta(mensaje.msg, mensaje.categoria);
    }
    
  },[mensaje, autenticado]);

    const [usuario, editarUsuario]= useState({
        nombre: "",
        password: ""

    });

    const {nombre, password}= usuario;

    const onChange = e =>{
        editarUsuario({
            ...usuario,
            [e.target.name]:e.target.value
        });
    }


    const onSubmit=e=>{
        e.preventDefault();

        //validar que no esté vacío
    if(nombre.trim() ==='' || password.trim() ==='' ){

        mostrarAlerta('Todos los campos son obligatorios', 'error')
        return;
      }

        iniciarSesion(usuario);

        // console.log(usuario)
        // history('/home')


    }

    return (
    <div className='absolute bg-blue-800 w-screen h-screen flex items-center justify-center '>
     {alerta ? (<div className={`alerta ${alerta.categoria}`}>{alerta.msg} </div>) : null}

        <div className=" p-6 rounded-sm shadow-sm w-full h-1/2 md: max-w-sm ">

            <h1 className='text-white font-bold text-5xl text-center mb-8'>TítuloQR</h1>
            <form className='flex flex-col my-2' onSubmit={onSubmit} >

                <div className="flex items-center 
                        bg-white rounded-sm my-2
                            ">
                    <FaUserAlt className='ml-2'/>
                    <input className='ml-1 p-2 w-full my-0 outline-none border-0'
                        type='text'
                        placeholder='Usuario'
                        onChange={onChange}
                        value={nombre}
                        name='nombre'
                     />
                </div>

                <div className="flex items-center 
                        bg-white rounded-sm my-2
                            ">
                    <FaUnlock className='ml-2'/>
                    <input className='ml-1 p-2 w-full my-0 outline-none border-0' 
                        type='password'
                        placeholder='Contraseña'
                        onChange={onChange}
                        value={password}
                        name='password' />
                        
                </div>

                <input className='w-full bg-white p-2 mt-12 text-blue-800 rounded-sm cursor-pointer ' type={'submit'} value={'Acceder'}  />
            </form>

        </div>

    </div>
    )
}

export default Login;