import {BrowserRouter as Router, Routes, Route,Link} from 'react-router-dom';
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



function App() {

  console.log(process.env.REACT_APP_BACKEND_URL)
  return (
      <div className='flex bg-blue-800'>
      <AuthState>
        <ParticipantesState>
          <TrabajosState>
            <AlertaState>
                <Router>
                    <aside className='bg-blue-800 h-screen  w-fit'>
                        <h1 className='p-7 text-4xl text-white font-bold'>TítulosQR</h1>
                        <Link to={'/home'} className='pl-2   text-white block m-5' >Participantes</Link>
                        <Link to={'/trabajos'} className=' pl-2   text-white block m-5' >Trabajos</Link>
                        <Link to={'/qr'} className=' pl-2   text-white block m-5' >GenerarQR</Link>
                    </aside>

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
