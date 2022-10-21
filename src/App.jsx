
import { useNavigate } from 'react-router-dom';
import { Navigate, Route, Routes } from "react-router-dom"

import './App.css';
import { MisTrabajos } from './MisTrabajos';

import { Sobre_mi } from './Sobre_mi';

function App() {
  
  return (
    <Routes>
        
      <Route path="sobre_mi" element= {<Sobre_mi/>}/>
      <Route path="mis_trabajos" element= {<MisTrabajos/>}/>
      <Route path="/" element= {<Navigate to = "/sobre_mi"/>}/>

    </Routes>
  )
}

export default App
