import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import authContext from '../../context/auth/authContext';
import React,{useContext,useEffect} from 'react';

import QRview from '../../layout/QRview';
import Diploma from '../trabajos/Diploma';
import Login from '../auth/Login';
import Registro from '../auth/Registro';
import Trabajos from '../../layout/Trabajos';
import Participantes from '../../layout/Participantes';

const Rutas = () => {
    
    const AuthContext = useContext(authContext);
    const { autenticado}= AuthContext;

  return (
   
        <Routes>
          <Route exact path= '/' element={<Login/>}/>
          <Route exact path='/registro' element={<Registro/>} />
          {/* Rutas Privadas */}
          <Route exact path= '/home' element={ autenticado  ? <Participantes/> : <Navigate to='/'/>  }/>
          <Route exact path= '/trabajos' element={<Trabajos/>}/>
          <Route exact path= '/qr' element={<QRview/>}/>
          <Route exact path= '/diploma:id' element={<Diploma/>}/>
          {/* Rutas Privadas */}
      </Routes>
    
  )

}

export default Rutas;