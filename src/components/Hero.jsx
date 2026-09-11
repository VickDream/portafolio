import React, { useState, useEffect } from 'react';
import '../styles/Hero.css';

const words = ["Desarrollador Front-End", "Diseñador Gráfico"];

export default function Hero() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  // Estado para el efecto interactivo de la foto (Easter egg al hacer clic)
  const [isGlitchActive, setIsGlitchActive] = useState(false);

  useEffect(() => {
    const fullText = words[currentWordIndex];
    let timer;

    if (!isDeleting) {
      if (currentText.length < fullText.length) {
        timer = setTimeout(() => {
          setCurrentText(fullText.substring(0, currentText.length + 1));
        }, typingSpeed);
      } else {
        timer = setTimeout(() => {
          setIsDeleting(true);
          setTypingSpeed(100);
        }, 2000);
      }
    } else {
      if (currentText.length > 0) {
        timer = setTimeout(() => {
          setCurrentText(fullText.substring(0, currentText.length - 1));
        }, typingSpeed);
      } else {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
        setTypingSpeed(150);
      }
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex, typingSpeed]);

  const handleImageClick = () => {
    setIsGlitchActive(true);
    setTimeout(() => setIsGlitchActive(false), 800); // Duración del efecto interactivo
  };

  return (
    <section id="hero" className="full-section hero-section active">
      <div className="hero-container">
        
        {/* Columna Derecha: Foto con interactividad de toque */}
        <div className="hero-image-content">
          <div 
            className={`hero-img-wrapper ${isGlitchActive ? 'interactive-pulse' : ''}`}
            // onClick={handleImageClick}
            // title="¡Haz clic!"
            // style={{ cursor: 'pointer' }}
          >
            <img src="me.webp" alt="Víctor Mosqueda" className="hero-img" />
            <div className="hero-img-fade"></div>
          </div>
        </div>
        
        {/* Columna Izquierda: Textos y Botón */}
        <div className="hero-text-content">
          <span className="hero-subtitle">Hola, mi nombre es</span>
          <h1 className="hero-title">Víctor Mosqueda</h1>
          
          <p className="hero-description">
            <span>{currentText}</span>
            <span className="typing-cursor">|</span>
          </p>

          <div className="hero-actions">
            <a href="#projects" className="hero-btn">Ver Proyectos</a>
          </div>
        </div>

      </div>

      {/* Indicador de scroll inferior interactivo para atrapar la curiosidad */}
      <div className="scroll-indicator">
        <span>Desliza para explorar</span>
        <div className="scroll-mouse">
          <div className="scroll-wheel"></div>
        </div>
      </div>
    </section>
  );
}