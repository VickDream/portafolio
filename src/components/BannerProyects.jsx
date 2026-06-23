import '../styles/BannerProyects.css'
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom' // <- Recuerda las llaves { } aquí

function BannerProyects({ proyecto }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <>
      <div
        className='banner-proeyect'
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {!isHovered ? (
          // Vista 1: Cuando NO tiene el mouse encima
          <img
            src={proyecto.img}
            alt={proyecto.name}
          />
        ) : (
          // Vista 2: Al pasar el mouse
          <div className="info-proyecto">
            {/* Envolvemos todo el contenido en el NavLink usando la URL del JSON */}
            <NavLink
              to={proyecto.link} 
              className="proyecto-link-wrapper"
              target="_blank"
            >
              <h3>{proyecto.name}</h3>
              <p>{proyecto.description}</p>
            </NavLink>
          </div>
        )}
      </div>
    </>
  )
}

export default BannerProyects