import '../styles/Contact.css'
import { NavLink } from 'react-router-dom'
import { FiGithub } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa6";
import { FaWhatsapp, FaRegFilePdf } from "react-icons/fa";

function Contact() {
  return (
    <>
      <section>
        <div className='contact-minimal'>
          <h2>Contacto</h2>
          <p>¿Tienes un proyecto en mente o quieres trabajar juntos? ¡Hablemos!</p>

          {/* Contenedor de redes sociales */}
          <div>
            <NavLink
              to="https://github.com/VickDream"
              target='_blank'
            >
              <FiGithub />
            </NavLink>

            <NavLink
              to="https://www.instagram.com/victorwosqueda/"
              target='_blank'
            >
              <FaInstagram />
            </NavLink>

            <NavLink
              to="https://wa.me/7291232560"
              target='_blank'
            >
              <FaWhatsapp />
            </NavLink>
            <NavLink
              to="/cv.pdf"
              target='_blank'
              rel="noopener noreferrer" 
              className="social-button"
              title="Ver mi CV"
            >
              <FaRegFilePdf />
            </NavLink>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact