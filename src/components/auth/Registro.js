import React,{useState, useContext, useEffect} from 'react';
import {FaUserAlt,FaUnlock, FaEnvelope} from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import AlertaContext from '../../context/alertas/alertasContext';
import '../../index.css'
import authContext from '../../context/auth/authContext';


const Registro = () => {

  const history = useNavigate();

  const alertaContext = useContext(AlertaContext);
  const{alerta, mostrarAlerta}= alertaContext;

  const AuthContext = useContext(authContext);
  const {autenticado,mensaje,registrarUsuario} = AuthContext;



  useEffect(()=>{

    // if (autenticado){
    //   history('/home');
    // }

    if(mensaje){
      mostrarAlerta(mensaje.msg, mensaje.categoria);
    }
    
  },[mensaje, autenticado]);

  const [usuario, editarUsuario]= useState({
    nombre: "",
    password: "",
    passwordVer: "",
    email: "",
    isAdmin: false

});

const {nombre, password, passwordVer, email, isAdmin}= usuario;

const onChange=e=>{
  editarUsuario({
    ...usuario,
    [e.target.name]: e.target.value
  });
}

const onChangeCheckBox=e=>{
  editarUsuario({
    ...usuario,
    isAdmin: e.target.checked
  })
}

  

  const onSubmit=e =>{
    e.preventDefault()
    

    //validar que no esté vacío
    if(nombre.trim() ==='' || password.trim() ==='' ||  passwordVer.trim()==='' || email.trim()==='' ){

      mostrarAlerta('Todos los campos son obligatorios', 'error')
      return;
    }
    
    //Validar el length del password
    if( password.length < 6){
      mostrarAlerta('La contraseña debe contener más de 6 caracteres', 'error')
      return;
      
    }
    
    
    //Validar que las contraseñas coincidan
    if(password !== passwordVer){
      mostrarAlerta('Las contraseñas no coinciden', 'error')
      return;

    }

    registrarUsuario({nombre, password, email, isAdmin});

    // mostrarAlerta('Usuario registrado correctamente', 'fine')

  }

  return (
    <div className='absolute bg-blue-800 w-screen h-screen flex items-center justify-center '>
        {alerta ? (<div className={`alerta ${alerta.categoria}`}>{alerta.msg} </div>) : null}
      

        <div className=" p-6 rounded-sm shadow-sm w-full  md: max-w-sm ">

            <h1 className='text-white font-bold text-4xl text-center mb-8'>Añadir Usuario</h1>
            <form className='flex flex-col my-2' onSubmit={onSubmit} >

                <div className="flex items-center 
                        bg-white rounded-sm my-2
                            ">
                    <FaUserAlt className='ml-2'/>
                    <input className='ml-1 p-2 w-full my-0 outline-none border-0'
                      type='text'
                      placeholder='Usuario'
                      name='nombre'
                      value={nombre}
                      onChange={onChange} />
                </div>
                <div className="flex items-center 
                        bg-white rounded-sm my-2
                            ">
                    <FaEnvelope className='ml-2'/>
                    <input className='ml-1 p-2 w-full my-0 outline-none border-0'
                      type='text' 
                      placeholder='Correo'
                      name='email'
                      value={email}
                      onChange={onChange}
                      />
                </div>

                <div className="flex items-center 
                        bg-white rounded-sm my-2
                            ">
                    <FaUnlock className='ml-2'/>
                    <input className='ml-1 p-2 w-full my-0 outline-none border-0' 
                      type='password' 
                      placeholder='Contraseña'
                      name='password'
                      value={password}
                      onChange={onChange} />
                </div>
                <div className="flex items-center 
                        bg-white rounded-sm my-2
                            ">
                    <FaUnlock className='ml-2'/>
                    <input className='ml-1 p-2 w-full my-0 outline-none border-0' type='password' 
                      placeholder='Verificar Contraseña'
                      name='passwordVer'
                      value={passwordVer}
                      onChange={onChange} />
                </div>
                <label className='text-white mx-2'> Is Admin?
                  <input 
                    type='checkbox'
                    name='isAdmin'
                    checked={isAdmin}
                    value={isAdmin}
                    onChange={onChangeCheckBox}

                  />
                </label>

                <input className='w-full bg-white p-2 mt-12 text-blue-800 rounded-sm cursor-pointer ' type={'submit'} value={'Acceder'}  />
                <Link to={'/home'} className='w-full bg-red-700 p-2 mt-2 text-white rounded-sm cursor-pointer text-center'  >Volver</Link>
            </form>

        </div>

    </div>
  )
}

export default Registro;