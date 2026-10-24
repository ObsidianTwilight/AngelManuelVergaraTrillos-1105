import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// Función componente reutilizable
function Tarjeta({ srcImagen, texto, textoBoton }) {
  return (
    <div>
      <img src={srcImagen} alt={texto} />
      <p>{texto}</p>
      <button>{textoBoton}</button>
    </div>
  );
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* Llamada 1 */}
    <Tarjeta 
      srcImagen="https://via.placeholder.com/150" 
      texto="Este es el primer texto" 
      textoBoton="Botón 1" 
    />
    
    {/* Llamada 2 */}
    <Tarjeta 
      srcImagen="https://via.placeholder.com/150" 
      texto="Este es el segundo texto" 
      textoBoton="Botón 2" 
    />
  </StrictMode>,
)
