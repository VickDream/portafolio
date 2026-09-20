import React from 'react';
import '../styles/About.css';

export default function About() {
  return (
    <section className="full-section about-section">
      <div className="about-content">
        
        <div className="about-text">
          <h2>Sobre Mí</h2>
          
          <p>
            Desarrollador con una fuerte sensibilidad hacia el diseño y la experiencia de usuario. 
            Me apasiona construir soluciones digitales que no solo funcionen con precisión bajo el capó, 
            sino que también se sientan intuitivas, limpias y agradables de usar.
          </p>
          
          <p className="about-highlight">
            Disfruto cerrando la brecha entre la lógica del código y la estética visual 
            para crear productos funcionales que realmente conecten con las personas.
          </p>

          <div className="about-skills">
            <span>Front-End</span>
            <span>UX/UI</span>
            <span>Clean Code</span>
            <span>Diseño Responsivo</span>
          </div>
        </div>

      </div>
    </section>
  );
}