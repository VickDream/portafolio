import React from 'react';
import '../styles/Hero.css';

export default function Hero() {
  return (
    <section id="hero" className="full-section hero-section">
      <div className="hero-container">
        
        {/* Columna Derecha: Foto con desvanecido y filtros */}
        <div className="hero-image-content">
          <div className="hero-img-wrapper">
            {/* Reemplaza '/tu-foto.webp' con el nombre de tu archivo en la carpeta public */}
            <img src="me.png" alt="Víctor Mosqueda" className="hero-img" />
            <div className="hero-img-fade"></div>
          </div>
        </div>
        
        {/* Columna Izquierda: Textos y Botón */}
        <div className="hero-text-content">
          <span className="hero-subtitle">Hola, mi nombre es</span>
          <h1 className="hero-title">Víctor Mosqueda</h1>
          <p className="hero-description">Desarrollador Front-End & Diseñador Gráfico</p>
          <div className="hero-actions">
            <a href="#projects" className="hero-btn">Ver Proyectos</a>
          </div>
        </div>


      </div>
    </section>
  );
}