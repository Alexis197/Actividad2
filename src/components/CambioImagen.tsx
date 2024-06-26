import React, { useState } from 'react';
import Imagen1 from '../assets/Imagenes/Imagen1.jpg';
import Imagen2 from '../assets/Imagenes/Imagen2.jpg';
import Imagen3 from '../assets/Imagenes/Imagen3.jpg';
import Imagen4 from '../assets/Imagenes/Imagen4.jpg';

const CambioImagen: React.FC = () => {
  const [imagenActual, setImagenActual] = useState(Imagen1);

  const cambiarImagen = () => {
    setImagenActual(imagenActual === Imagen1 ? Imagen2 : imagenActual === Imagen2 ? Imagen3 : imagenActual === Imagen3 ? Imagen4 : Imagen1);
  };
  

  return (
    <div>
      <img src={imagenActual} alt="Imagen" />
      <button onClick={cambiarImagen}>Cambiar</button>
    </div>
  );
}

export default CambioImagen;