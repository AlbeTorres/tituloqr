import React,{useState} from 'react';
import {FaUserAlt,FaUnlock} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';


const Login = () => {

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

    const history = useNavigate();

    const onSubmit=e=>{
        e.preventDefault();

        console.log( usuario)
        history('/home')


    }

    return (
    <div className='absolute bg-blue-800 w-screen h-screen flex items-center justify-center '>

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