import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom';

import { Navigate, Route, Routes } from "react-router-dom"
import App from './App'
import './App.css'
import './mis_trabajos.css'
import { MisTrabajos } from './MisTrabajos'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <BrowserRouter>
      <App/>
    </BrowserRouter>
   
  </React.StrictMode>
)
