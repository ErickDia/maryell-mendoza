import React from 'react'
import { useNavigate } from 'react-router-dom';

import foto_maryell from './resources/images/Maryell_photo.jpg';
import logo_facebook from "./resources/images/facebook-app-symbol.png";
import logo_instagram from "./resources/images/instagram.png";
import img_portafolio from "./resources/images/portfolio.png";

export const Sobre_mi = () => {
  const navigate = useNavigate()

  const go_sobre_mi_page = (event) => {
    // navigate('/')
  }

  const go_mis_trabajos_page = (event) => {
    navigate('/mis_trabajos')
  }

  return (
    <div className="container_columns">
      <a  href="./index.html" className="logo">
        <p className="text_logo">M</p>
      </a>
      <nav className="navbar">
        <a className="navbar_item" onClick={go_sobre_mi_page}>
          <div className="navbar_item_decoration active"></div>
          <p>SOBRE MI</p>
          
        </a>
        <a className="navbar_item" onClick={go_mis_trabajos_page}>
          <div className="navbar_item_decoration"></div>
          <p>MIS TRABAJOS</p>
        </a>
        <a onClick={go_mis_trabajos_page}>
          <img className='trabajos_icon' src = {img_portafolio}/>
        </a>
      </nav>
      <div className="container_columns2">
        <div className="container_info">
          <div className="container_encantada">
            <div className="encantada_decoration"></div>
            <p className="encantada">ENCANTADA DE CONOCERTE, SOY</p>
            <div className="encantada_decoration2"></div>

          </div>
          
          <div className="container_nopmbre_completo">
            <h1 className="nombre_completo"><div className="nombre">Maryell</div><div className="apellido">Mendoza</div></h1>
            
          </div>
          <div className="nombre_completo_decoration1"></div>
            <div className="nombre_completo_decoration2"></div>
          <h2 className="profesion">Estudiante de Arquitectura</h2>
          <img className="photo-mobile" src={foto_maryell} alt="Foto de Maryell Mendoza"/>

        
          <div className="container_description">
            <div className="description_decoration"></div>
            <p className="description">
              Actualmente soy estudiante de 4to año de Arquitectura, curso el setimo semestre en la Universidad Nacional Jorge Basadre Grohmann. Me considero perseverante, dedicada en mis estudios y tengo conocimiento de diferentes programas arquitectónicos.

            </p>
          </div>
        </div>
        <div className="container_photo">
          <img className="photo" src={foto_maryell}  alt="Foto de Maryell Mendoza"/>
        </div>
      </div>
      
      <div className="container_redes_sociales">
        <a className="link_redes sociales" href="https://www.facebook.com/maryell.mendoza.5">
          <img className="img_red_social" src={logo_facebook} alt="logo de facebook"/>
        </a>
        <a className="link_redes_sociales" href="https://www.instagram.com/maryell_mv19/">
          <img className="img_red_social" src={logo_instagram} alt="logo de instagram"/>
        </a>
      </div>
    </div>
  )
}
