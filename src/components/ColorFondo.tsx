import React, { useState } from 'react';

const ColorFondo = () => {
  const [colorFondo, setColorFondo] = useState('#ffffff');

  const cambiarColor = () => {
    
    const nuevoColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    document.body.style.backgroundColor = nuevoColor; 
    setColorFondo(nuevoColor);
  };

  return (
    <div>
      <button onClick={cambiarColor}>Color de Fondo</button>
    </div>
  );
};

export default ColorFondo;

