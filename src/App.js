
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import ParticipantesState from './context/participantes/participantesState';
import './index.css'

import TrabajosState from './context/trabajos/trabajosState';

import AlertaState from './context/alertas/alertasSate';
import AuthState from './context/auth/authState';
import tokenAuth from './config/tokenAuth';
import Aside from './layout/Aside';
// import RutaPrivada from './components/routes/RutaPrivada';
import React,{useContext,useEffect} from 'react';
import Rutas from './components/routes/Rutas';


//Revisar si tenmos un token
const token= localStorage.getItem('token');

if(token){
  tokenAuth(token);
}

function App() {


  return (
      <div className='flex bg-blue-800'>
      <AuthState>
        <ParticipantesState>
          <TrabajosState>
            <AlertaState>
              <Router>
                    <Aside/>
                    <Rutas/>
              </Router>
            </AlertaState>
          </TrabajosState>
        </ParticipantesState>

      </AuthState>
      </div>
    
    
  );
}

export default App;
