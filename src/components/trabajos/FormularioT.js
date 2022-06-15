import React,{useContext, useState,useEffect} from 'react';
import trabajosContext from '../../context/trabajos/trabajosContext';

function FormularioT({añadir}) {

    const trabajosAuxContext= useContext(trabajosContext);
    const {abrirSeleccionar,cerrarModificar, trabajoM, modificar,añadirTrabajo,
         modificarTrabajo, vaciarIntegrantes }= trabajosAuxContext

    
    let idM=''
    let nombreM= '';
    let integrantesM= [];

     //Si se usa el componente como modificar colocar en el estado los valores anteriores del participante
    if(!añadir){

    idM= trabajoM[0].id;
    nombreM = trabajoM[0].nombre ;
}
    integrantesM =trabajoM[0].integrantes;





    const [trabajo, guardarTrabajo]= useState({
        nombre: nombreM,
        integrantes: integrantesM,

    });

    useEffect(()=>{
        guardarTrabajo({
            nombre: nombreM,
            integrantes: integrantesM,
    
        });

    },[trabajoM])

    const {nombre}= trabajo;

    const onChangeTrabajo=e=>{
        guardarTrabajo({
            ...trabajo,
            [e.target.name]:e.target.value,
        })

    }


    const abrirSelect=e=>{
        e.preventDefault();

        if( añadir && modificar){

            alert("Termina de modificar el elemento actual antes de añadir uno nuevo")

        }else{
            abrirSeleccionar();
            
        }
    }

    const cerrarModi=e=>{
        e.preventDefault();
        cerrarModificar();
    }


    const onSubmit= e=>{
        e.preventDefault();
    
        //Validar form
        if( nombre==''){
            return;
        }
    
        //Añadir al estado
        if( añadir && modificar ){
            alert('termina de modificar el trabajo antes de agregar otro')
            return;
        }else{

            if(!añadir){
                modificarTrabajo(idM, trabajo )
                vaciarIntegrantes();
                cerrarModificar();
                console.log(trabajo)

            }else{

        

                añadirTrabajo(trabajo);
                console.log(trabajoM[0].integrantes)

                
                vaciarIntegrantes();
                console.log(trabajoM[0].integrantes)
                

            } 
        } 
    }

    return (
    <div className={añadir? 'h-screen relative bg-blue-800 px-2 ':'h-screen relative bg-white'}>
        <h1 className={ añadir ?'p-7 text-4xl text-white font-bold':'p-7 text-4xl text-blue-800 font-bold'}>{añadir ? 'Añadir':'Modificar'}</h1>
        <form className='grid  gap-6' onSubmit={onSubmit} >
            <div className='w-full px-2'>
                <label className={añadir ? 'block text-white':'block'}>Título del Trabajo:</label>
                <input className= {añadir ? 'w-80 p-2 mt-2 border-2 border-white shadow-lg rounded-sm':'w-full p-2  mt-2 border-2 shadow-lg rounded-sm border-blue-800'}
                    placeholder='Escribe el título del trabajo'
                    name="nombre"
                    value={nombre}
                    type='text'
                    onChange={onChangeTrabajo}
                /> 
                <button className={añadir ? 'p-2 w-full bg-white rounded-sm text-blue-800 mt-8':'p-2 w-full bg-blue-800 rounded-sm text-white mt-8'} onClick={abrirSelect}>Seleccionar integrantes</button>
                
            </div>
            <div className='w-full px-2 absolute bottom-5'>
                <input type='submit' value={añadir ? 'Añadir':'Modificar'} className={añadir ? 'bg-white rounded-sm cursor-pointer  w-80 p-2 text-blue-800':'bg-blue-800 rounded-sm  cursor-pointer w-full p-2 text-white    '} />
                {!añadir && <input type='submit' value='Cancelar' onClick={cerrarModi} className= 'bg-red-800 mt-2 rounded-sm cursor-pointer w-full p-2 text-white' />} 
            </div>

        </form>
    </div>
    )
}

export default FormularioT;