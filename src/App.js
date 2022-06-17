import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Participantes from './layout/Participantes';
import ParticipantesState from './context/participantes/participantesState';
import './index.css'
import Trabajos from './layout/Trabajos';
import TrabajosState from './context/trabajos/trabajosState';
import QRview from './layout/QRview';
import Diploma from './components/trabajos/Diploma';
import Login from './components/auth/Login';
import Registro from './components/auth/Registro';
import AlertaState from './context/alertas/alertasSate';
import AuthState from './context/auth/authState';
import tokenAuth from './config/tokenAuth';
import Aside from './layout/Aside';



//Revisar si tenmos un token
const token= localStorage.getItem('token');

if(token){
  tokenAuth(token);
}

function App() {

  console.log(process.env.REACT_APP_BACKEND_URL)
  return (
      <div className='flex bg-blue-800'>
      <AuthState>
        <ParticipantesState>
          <TrabajosState>
            <AlertaState>
                <Router>
                    <Aside/>

                    <Routes>
                        <Route exact path= '/' element={<Login/>}/>
                        <Route exact path='/registro' element={<Registro/>} />
                        <Route exact path= '/home' element={<Participantes/>}/>
                        <Route exact path= '/trabajos' element={<Trabajos/>}/>
                        <Route exact path= '/qr' element={<QRview/>}/>
                        <Route exact path= '/diploma:id' element={<Diploma/>}/>
                    </Routes>
                </Router>
            </AlertaState>
          </TrabajosState>
        </ParticipantesState>

      </AuthState>
      </div>
    
    
  );
}

export default App;
