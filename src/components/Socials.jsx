import React from 'react';
import { FaGithub, FaLinkedinIn, FaWhatsapp, FaInstagram, FaEnvelope } from 'react-icons/fa';
import '../styles/Socials.css';

export default function Socials() {
  return (
    <section id="socials" className="full-section socials-section">
      <div className="socials-content-wrapper">
        <h2 className="socials-title">Conectemos</h2>
        <p className="socials-subtitle">¿Tienes algún proyecto en mente? Hablemos.</p>
        
        <div className="social-links">
          <a 
            href="https://github.com/VickDream" 
            target="_blank" 
            rel="noreferrer" 
            className="social-btn github"
            aria-label="GitHub"
          >
            <span className="icon-box"><FaGithub /></span>
            {/*<span className="label">GitHub</span>*/}
          </a>

          {/*<a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noreferrer" 
            className="social-btn linkedin"
            aria-label="LinkedIn"
          >
            <span className="icon-box"><FaLinkedinIn /></span>
            <span className="label">LinkedIn</span>
          </a>*/}

          {/*<a 
            href="https://wa.me/tu_numero" 
            target="_blank" 
            rel="noreferrer" 
            className="social-btn whatsapp"
            aria-label="WhatsApp"
          >
            <span className="icon-box"><FaWhatsapp /></span>
            <span className="label">WhatsApp</span>
          </a>*/}

          <a 
            href="https://www.instagram.com/victorwosqueda/" 
            target="_blank" 
            rel="noreferrer" 
            className="social-btn instagram"
            aria-label="Instagram"
          >
            <span className="icon-box"><FaInstagram /></span>
            {/*<span className="label">Instagram</span>*/}
          </a>

          {/*<a 
            href="mailto:tucorreo@example.com" 
            className="social-btn email"
            aria-label="Correo"
          >
            <span className="icon-box"><FaEnvelope /></span>
            <span className="label">Correo</span>
          </a>*/}
        </div>
      </div>
    </section>
  );
}