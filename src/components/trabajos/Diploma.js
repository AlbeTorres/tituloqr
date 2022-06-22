import React,{useContext, useEffect} from 'react';
import {Link, useParams} from 'react-router-dom';
import trabajosContext from '../../context/trabajos/trabajosContext';
import participantesContext from '../../context/participantes/participantesContext';

function Diploma() {

    const trabajoAuxContext = useContext(trabajosContext);
    const {trabajos, obtenerTrabajos} = trabajoAuxContext;

    const participantesAuxContext = useContext(participantesContext);
    const {participantes, obtenerParticipantes} = participantesAuxContext;

    //obtener todos los trabajos cuando carga el estado inicial
    useEffect(()=>{
        obtenerTrabajos();
        obtenerParticipantes();
            },[]);

    let params = useParams();
    let nombre= '';
    let participantesAUX=[{nombre:'albe'}];

    

        const trabajoDiploma = trabajos.filter( trabajo => trabajo._id == params.id );
    
        
        
        if(trabajoDiploma.length ){
            nombre = trabajoDiploma[0].titulo
            participantesAUX = participantes.filter(participante=> trabajoDiploma[0].integrantes.includes(participante._id))

            console.log(trabajoDiploma[0].integrantes)
            console.log(participantesAUX)
        }
   

    return (
    <div className='absolute w-screen h-screen bg-white '>

        <Link to={'/qr'} className=' bg-blue-800 rounded-sm p-2 shadow-md text-white m-2'>Regresar</Link>

        <div className='bg-gray-50 shadow-lg max-w-sm m-auto h-5/6 relative border-2 border-red-700'>
            <div className=' flex flex-col items-center justify-evenly '>

                <div className='flex flex-col items-center'>
                    <figure className='w-10 h-10 mt-4'>
                        <img className='w-full h-full rounded-md shadow-sm' src='escudo_artemisa.png'/>
                    </figure>
                    <h2 className='font-semibold mt-2'>Título:</h2>
                    <h1 className='text-center font-bold m-6 text-2xl '>{nombre}</h1>
                </div>


                <div className='flex items-center flex-col'>
                    <h2 className='font-semibold mb-2'>Integrantes:</h2>
                    { participantesAUX.map( participante=>(<h3 className='text-sm'>- {participante.nombre}</h3>))}
                </div>

                
                <div className='flex flex-col items-center absolute bottom-2  m-4'>
                    
                    <p className='m-2 text-xs'>Validado por la Universidad de Artemisa</p>
                    <figure className='w-11  h-16 '>
                        <img className='w-full h-full  shadow-sm' src='Logo-UART.jpg'/>
                    </figure>
                </div>

            </div>
        </div>
    </div>
    )
}

export default Diploma;