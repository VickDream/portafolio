import React from 'react';
import '../styles/Socials.css';

export default function Socials() {
  return (
    <section className="full-section socials-section">
      <h2>Conectemos</h2>
      <p>¿Tienes algún proyecto en mente? Hablemos.</p>
      <div className="social-links">
        {/*<a href="https://github.com" target="_blank" rel="noreferrer">GitHub</a>*/}
        {/*<a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>*/}
        <a href="https://linkedin.com" target="_blank" rel="noreferrer">WhatsApp</a>
        <a href="https://linkedin.com" target="_blank" rel="noreferrer">Instagram</a>
        <a href="mailto:tucorreo@example.com">Correo</a>
      </div>
    </section>
  );
}