import '../styles/Presentation.css'
import { NavLink } from 'react-router-dom'

function Presentation() {
  return (
    <>
      <section>
        <div className='presentaton-content'>
          <h1>¡Hola! Soy un Desarrollador Web</h1>
          <h2>Enfocado en crear interfaces dinámicas y soluciones personalizadas</h2>

          <p>
            Me apasiona transformar ideas en código limpio y funcional.
            Combino la lógica del desarrollo frontend con un enfoque meticuloso,
            estructurando proyectos eficientes que van desde herramientas de gestión
            hasta plataformas con alta identidad visual.
          </p>

          <div className='presentation-action'>
            <NavLink
              className="btnproyects"
              to="/proyects"
            >
              Ver mis proyectos
            </NavLink>
          </div>
        </div>
      </section>
    </>
  )
}

export default Presentation