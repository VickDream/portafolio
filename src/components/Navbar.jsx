import '../styles/Navbar.css'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <>
      <nav>
        <div>
          <NavLink></NavLink>
        </div>

        <ul>
          <li>
            <NavLink to="/">Presntación</NavLink>
          </li>
          <li>
            <NavLink to="/proyects">Mis Proyectos</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contacto</NavLink>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar