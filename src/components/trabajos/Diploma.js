import React,{useContext, useEffect} from 'react';
import {Link, useParams} from 'react-router-dom';
import trabajosContext from '../../context/trabajos/trabajosContext';
import participantesContext from '../../context/participantes/participantesContext';
import '../../index.css'

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
    <div className='absolute w-screen h-screen bg-gray-50 '>


        <div className='relative flex items-center justify-center h-screen w-screen'>

            <div className='bg-white shadow-lg  relative border-2 h-max w-screen mx-2 p-1 tablet '>

                <div className='border-4 border-yellow-200 '>

                        <div className=' flex flex-col items-center justify-evenly '>

                            <div className='flex flex-col items-center h-28 mt-2 '>
                                {/* <figure className='w-10 h-10 mt-4'>
                                    <img className='w-full h-full rounded-md shadow-sm' src='escudo_artemisa.png'/>
                                </figure> */}
                                <p className='text-xs pt-1 font-extralight  '>Certificado Por la Universidad de Artemisa</p>
                                <h2 className='  diploma-text '>Diploma</h2>
                                <h1 className='text-center italic'>{nombre}</h1>
                            </div>

                            <div className='grid integrantes justify-center items-center w-full h-20  ' >
                                <div className='m-auto'>
                                    <h2 className='text-xs text-center pt-1 font-extralight'>Integrantes:</h2>
                                    { participantesAUX.map( participante=>(<p className='text-center integrantes-text'>{participante.nombre}</p>))}
                                </div>

                                <figure className='w-10  h-12 mx-auto  '>
                                    <img className='w-full h-full  shadow-sm' src='Logo-UART.jpg'/>
                                </figure>
                                

                            </div>

                        </div>
                </div>
            </div>
        </div>
            <Link to={'/qr'} className=' bg-white rounded-sm p-1 shadow-md text-blue-800 m-2 absolute bottom-4 right-2'>Regresar</Link>
    </div>
    )
}

export default Diploma;