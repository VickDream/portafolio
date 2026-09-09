import React, { useEffect } from 'react';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Socials from './components/Socials';
import './App.css';

function App() {
  useEffect(() => {
    const sections = document.querySelectorAll('.full-section');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          } else {
            // Si quieres que se vuelva a desvanecer al salir, déjalo. 
            // Si prefieres que se quede visible una vez cargado, borra el else.
            entry.target.classList.remove('active');
          }
        });
      },
      { threshold: 0.5 } // Se activa cuando al menos la mitad de la sección es visible
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="portfolio-container">
      <Hero />
      <Projects />
      <Experience />
      <Socials />
    </div>
  );
}

export default App;