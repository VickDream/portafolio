import '../styles/Proyects.css'
import listaProyectos from '../data/proyects.json'
import BannerProyects from './BannerProyects'

function Proyects() {
  return (
    <>
      <section>
        <h2></h2>

        <div className='proyect-grid'>
          {listaProyectos.map((proyecto) => (
            <BannerProyects
              key={proyecto.id}
              proyecto={proyecto}
            />
          ))}
        </div>
      </section>
    </>
  )
}

export default Proyects;