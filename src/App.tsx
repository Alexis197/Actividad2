import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Titulo from './components/Titulo';
import Parrafo from './components/Parrafo';
import Imagen from './components/Imagen';
import Contador from './components/Contador';
import CambioImagen from './components/CambioImagen';
import ColorFondo from './components/ColorFondo';

import './App.css'

function App() {
  return (
    <>
      <div className="App">
      <Titulo
        texto="Actividad 2"
        tipoFuente="Arial"
        tamanoTexto="2em"
        color="blue"
      />
      <Parrafo
        texto="Conocimientos basicos de React, useEstate y useEfect.  "
        tipoFuente="Verdana"
        tamanoTexto="1.2em"
        color="green"
      />
      <h1>Contador</h1>
      <Contador 
      />
      <Imagen
        src="https://via.placeholder.com/150"
        alt="Imagen de ejemplo"
        ancho="150px"
        alto="150px"
        bordeColor="red"
      />
      <h1>Cambio de Imagen</h1>
      <CambioImagen
      />
       <h1>Color de Fondo</h1>
       <ColorFondo 
       />
      
    </div>
    </>
  )
}

export default App
