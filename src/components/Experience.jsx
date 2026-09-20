import React from 'react';
import '../styles/Experience.css';

export default function Experience() {
  return (
    <section className="full-section experience-section">
      <div className="timeline-container">
        
        <div className="timeline-header">
          <h2>Mi Trayectoria</h2>
          <p>De los primeros pasos al código profesional.</p>
        </div>

        <div className="timeline">
          {/* Item 1 */}
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <span className="timeline-date">2023</span>
              <h3>Primeros Pasos en la Web</h3>
              <p>
                Descubrí HTML, CSS y JavaScript. Construí mis primeros sitios estáticos.
              </p>
              <div className="timeline-tags">
                <span>HTML5</span>
                <span>CSS3</span>
                <span>JavaScript</span>
              </div>
            </div>
          </div>

          {/* Item 2 */}
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <span className="timeline-date">2024</span>
              <h3>El Salto a React</h3>
              <p>
                Adopté React para interfaces dinámicas. Aprendí componentes, props y estados.
              </p>
              <div className="timeline-tags">
                <span>React</span>
                <span>Vite</span>
                <span>Git</span>
              </div>
            </div>
          </div>

          {/* Item 3 */}
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <span className="timeline-date">Actualidad</span>
              <h3>Enfoque en UX/UI y Rendimiento</h3>
              <p>
                Optimizo imágenes, animaciones y estructura de código para una web más rápida.
              </p>
              <div className="timeline-tags">
                <span>UX/UI</span>
                <span>Optimización</span>
                <span>WebP</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}