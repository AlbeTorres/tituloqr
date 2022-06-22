import React,{useContext} from 'react';
import { Link } from 'react-router-dom';
import BuscarP from '../components/participantes/BuscarP';
import ListaQR from '../components/trabajos/ListaQR';
import QRCode from "react-qr-code";
import trabajosContext from '../context/trabajos/trabajosContext';



  

function QRview() {

    const trabajoAuxContext= useContext(trabajosContext);
    const {trabajoID}= trabajoAuxContext;

  

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
                <figure className='w-64 h-64 bg-white rounded-md shadow-sm'>
                
                <QRCode className='w-full h-full rounded-md shadow-sm' value={`http://localhost:3000/diploma${trabajoID}`} />
                </figure>
                <div className='flex justify-center mt-2'>
                    <button className='bg-white rounded-sm p-2 m-1 text-blue-800 border-blue-800 shadow-sm '>Generar</button>
                    <Link to={`/diploma${trabajoID} `} className='bg-white rounded-sm p-2 m-1 text-blue-800 border-blue-800 shadow-sm '>Acceder</Link>
                </div>
            </div> }
        </div>
    
    
    
    </div>
  )
}

export default QRview;