import React from 'react';

interface TituloProps {
  texto: string;
  tipoFuente?: string;
  tamanoTexto?: string;
  color?: string;
}

const Titulo: React.FC<TituloProps> = ({ texto, tipoFuente, tamanoTexto, color }) => {
  const estilo = {
    fontFamily: tipoFuente,
    fontSize: tamanoTexto,
    color: color,
  };

  return <h1 style={estilo}>{texto}</h1>;
}

export default Titulo;

