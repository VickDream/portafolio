import { useEffect, useState } from 'react';
import '../styles/SpaceBackground.css';

function SpaceBackground() {
  const [estrellas, setEstrellas] = useState([]);
  const [fugaces, setFugaces] = useState([]);

  // 1. Generación de la Galaxia en Espiral
  useEffect(() => {
    const numeroEstrellas = 100; // Subimos un poco para que el giro se vea más denso
    const listaEstrellas = [];

    for (let i = 0; i < numeroEstrellas; i++) {
      // Para crear un efecto de espiral/órbita, calculamos un ángulo y una distancia respecto al centro
      const anguloBase = Math.random() * 360;
      const radio = Math.random() * 80 + 10; // Distancia desde el centro en %

      // Convertimos coordenadas polares a posiciones X e Y en la pantalla
      const x = 50 + Math.cos((anguloBase * Math.PI) / 180) * radio;
      const y = 50 + Math.sin((anguloBase * Math.PI) / 180) * radio;

      const tamaño = Math.random() * 3 + 1.5; 
      const delay = Math.random() * 5; 
      const duracionParpadeo = Math.random() * 3 + 2; 

      // Cuanto más lejos del centro, más lento giran (física estelar real)
      const duracionRotacion = radio * 1.5 + 30; 

      listaEstrellas.push({
        id: `est-${i}`,
        style: {
          left: `${x}%`,
          top: `${y}%`,
          width: `${tamaño}px`,
          height: `${tamaño}px`,
          animationDelay: `${delay}s`,
          animationDuration: `${duracionParpadeo}s, ${duracionRotacion}s`,
          boxShadow: tamaño > 2.5 ? `0 0 ${tamaño}px rgba(255, 255, 255, 0.8)` : 'none',
        }
      });
    }
    setEstrellas(listaEstrellas);
  }, []);

  // 2. Lanzador del Efecto de Estrellas Fugaces
  useEffect(() => {
    const lanzarEstrellaFugaz = () => {
      // Coordenadas de inicio aleatorias en la parte superior/derecha
      const inicioX = Math.random() * 80 + 20; 
      const inicioY = Math.random() * 40; 
      const id = Date.now();

      const nuevaFugaz = {
        id,
        style: {
          left: `${inicioX}%`,
          top: `${inicioY}%`,
          // Duraciones ultra rápidas y aleatorias para el paso de la estela
          animationDuration: `${Math.random() * 0.4 + 0.6}s` 
        }
      };

      setFugaces((prev) => [...prev, nuevaFugaz]);

      // Limpieza de memoria: removemos el nodo una vez que la animación termina
      setTimeout(() => {
        setFugaces((prev) => prev.filter((f) => f.id !== id));
      }, 1200);
    };

    // Un temporizador aleatorio que intenta tirar una estrella fugaz cada 4 a 8 segundos
    const interval = setInterval(() => {
      if (Math.random() > 0.3) { // 70% de probabilidad de que caiga una en cada ciclo
        lanzarEstrellaFugaz();
      }
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="galaxia-contenedor">
      {/* Contenedor que rota todo el mapa estelar */}
      <div className="vortice-espiral">
        {estrellas.map((estrella) => (
          <div 
            key={estrella.id} 
            className="estrella-viva" 
            style={estrella.style}
          />
        ))}
      </div>

      {/* Las estrellas fugaces viajan de forma independiente fuera del eje del vórtice */}
      {fugaces.map((fugaz) => (
        <div 
          key={fugaz.id} 
          className="estrella-fugaz" 
          style={fugaz.style}
        />
      ))}
    </div>
  );
}

export default SpaceBackground;