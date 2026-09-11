import React, { useEffect } from 'react';
import Hero from './components/Hero';
import Projects from './components/Projects';
// import Experience from './components/Experience';
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
          }
        });
      },
      { threshold: 0.2 } // Reducimos el umbral al 20% para que se active más fácil
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="portfolio-container">
      <Hero />
      <Projects />
      {/*<Experience />*/}
      <Socials />
    </div>
  );
}

export default App;