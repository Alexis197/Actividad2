import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Titulo from './components/Titulo';
import Parrafo from './components/Parrafo';
import Imagen from './components/Imagen';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      <div className="App">
      <Titulo
        texto="Bienvenidos a mi sitio web"
        tipoFuente="Arial"
        tamanoTexto="2em"
        color="blue"
      />
      <Parrafo
        texto="Este es un párrafo de ejemplo que describe el contenido de la página."
        tipoFuente="Verdana"
        tamanoTexto="1.2em"
        color="green"
      />
      <Imagen
        src="https://via.placeholder.com/150"
        alt="Imagen de ejemplo"
        ancho="150px"
        alto="150px"
        bordeColor="red"
      />
    </div>
    </>
  )
}

export default App
