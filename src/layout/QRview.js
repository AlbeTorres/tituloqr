import React,{useContext, useRef} from 'react';
import { Link } from 'react-router-dom';
import BuscarP from '../components/participantes/BuscarP';
import ListaQR from '../components/trabajos/ListaQR';
import QRCode from "react-qr-code";
import trabajosContext from '../context/trabajos/trabajosContext';
import exportAsImage from '../utils/importASImagen';
import '../index.css'


  

function QRview() {

    const trabajoAuxContext= useContext(trabajosContext);
    const {trabajoID}= trabajoAuxContext;

    const exportRef = useRef();

  return (
    <div className='grid grid-cols-3 w-full'>
        <div className= ' h-screen'>
            <div className='bg-blue-800 shadow-xl grid justify-center items-center buscarp '>
                <BuscarP/>
            </div>
            <div className= 'container'>
                <ListaQR/>
        
            </div>
        </div>

        <div className='col-span-2 flex justify-center items-center'>
            {!trabajoID ? 
            <figure className='w-64 h-64 bg-white rounded-md shadow-sm'>
                <img className='w-full h-full rounded-md shadow-sm' src='PORTADA-QR.png'/> 
                <h3 className='text-white text-center font-bold text-lg '>Crea un QR</h3>
            </figure> :
                
            <div>
                <figure className='w-80 h-80 rounded-md shadow-sm qr flex items-center justify-center'  ref={exportRef}>
                <div className='w-64 h-64 flex items-center justify-center flex-col rounded-md shadow-sm bg-white'>
                     <h3 className='text-center  mb-1 p-1 text-lg font-bold '>Certificado</h3> 
                    <QRCode className='' size={150} value={`http://localhost:3000/diploma${trabajoID}`} />
                    <h3 className='text-center mt-1 p-1 text-lg font-bold  '>Universidad de Artemisa</h3> 

                </div>
                </figure>
                <div className='flex justify-center mt-2'>
                    <button className='bg-white rounded-sm p-2 m-1 text-blue-800 border-blue-800 shadow-sm ' onClick={() => exportAsImage(exportRef.current, trabajoID)}>Generar</button>
                    <Link to={`/diploma${trabajoID} `} className='bg-white rounded-sm p-2 m-1 text-blue-800 border-blue-800 shadow-sm '>Acceder</Link>
                </div>
            </div> }
        </div>
    
    
    
    </div>
  )
}

export default QRview;