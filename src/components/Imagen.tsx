import React from 'react';

interface ImagenProps {
  src: string;
  alt: string;
  ancho?: string;
  alto?: string;
  bordeColor?: string;
}

const Imagen: React.FC<ImagenProps> = ({ src, alt, ancho, alto, bordeColor }) => {
  const estilo = {
    width: ancho,
    height: alto,
    border: `2px solid ${bordeColor}`,
  };

  return <img src={src} alt={alt} style={estilo} />;
}

export default Imagen;
