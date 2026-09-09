import React, { useRef } from 'react';
import { projectsData } from '../data/proyects';
import '../styles/Projects.css';

export default function Projects() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const offset = direction === 'left' ? -clientWidth / 2 : clientWidth / 2;
      scrollRef.current.scrollTo({ left: scrollLeft + offset, behavior: 'smooth' });
    }
  };

  return (
    <section id="projects" className="full-section projects-section">
      <h2>Proyectos Destacados</h2>
      <div className="carousel-container">
        <button className="carousel-btn prev" onClick={() => scroll('left')}>&larr;</button>
        
        <div className="projects-carousel" ref={scrollRef}>
          {projectsData && projectsData.map((project) => (
            <a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="project-card"
            >
              {project.img && (
                <div 
                  className="project-bg" 
                  style={{ backgroundImage: `url(${project.img})` }}
                />
              )}
              <div className="project-overlay" />
              <div className="project-content">
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <span className="project-action">Ver Sitio &rarr;</span>
              </div>
            </a>
          ))}
        </div>

        <button className="carousel-btn next" onClick={() => scroll('right')}>&rarr;</button>
      </div>
    </section>
  );
}