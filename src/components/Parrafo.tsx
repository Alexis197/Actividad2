import React from 'react';

interface ParrafoProps {
  texto: string;
  tipoFuente?: string;
  tamanoTexto?: string;
  color?: string;
}

const Parrafo: React.FC<ParrafoProps> = ({ texto, tipoFuente, tamanoTexto, color }) => {
  const estilo = {
    fontFamily: tipoFuente,
    fontSize: tamanoTexto,
    color: color,
  };

  return <p style={estilo}>{texto}</p>;
}

export default Parrafo;
