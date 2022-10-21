import React from 'react'
import { useNavigate } from 'react-router-dom';
import img_tacna from "./resources/images/sem-1048---editorial-231020-035059.jpg";
import home from "./resources/images/home.png";


export const MisTrabajos = () => {
  const navigate = useNavigate()

  const go_sobre_mi_page = (event) => {
    navigate('/')
  }

  const go_mis_trabajos_page = (event) => {
    // navigate('/mis_trabajos')
  }
  return (
    <div className="m_container_columns">

      <a href="./index.html" className="m_logo">
        <p className="m_text_logo">M</p>
      </a>
   
      <nav className="m_navbar">
        <a className="m_navbar_item"  onClick={go_sobre_mi_page}>
          <div className="m_navbar_item_decoration"></div>
          <p>SOBRE MI</p>
          
        </a>
        <a className="m_navbar_item"  onClick={go_mis_trabajos_page}>
          <div className="m_navbar_item_decoration  m_active"></div>
          <p>MIS TRABAJOS</p>
        </a>
        <a onClick={go_sobre_mi_page}><img className="m_trabajos_icon" src={home} alt="trabajos"/></a>
      </nav>

      <h1 className="m_title_proyecto">Mapeo de la actividad turística en la ciudad de Tacna</h1>
      <h3 className="m_objetivo_titulo">Objetivo</h3>
      <p className="m_objetivo">Analizar los puntos calientes con mayor movilidad turística en la ciudad de Tacna</p>
      <img className="m_tacna_img" src={img_tacna} alt="plaza de Tacna - Peru"/>
      <p className="m_description">Este trabajo de investigación consistirá en recolectar datos de la red social twiter con fines académicos con la finalidad  de identificar dónde se observa mayor movimiento en la ciudad de Tacna a través de fotogfias de geolocalizacion. Luego de ello se va a registrar los datos en mapas satélites, para estudiar lo factores de los diversos espacios públicos.
      </p>
    </div>
  )
}
