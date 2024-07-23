import { useState } from 'react'
import './App.css'
import ItemCount from './components/ItemCount/ItemCount.jsx'  // Asegúrate de que la ruta sea correcta

function App() {
  return (
    <>
      <h1>Mi Tienda Virtual</h1>
      <div className="card">
        <ItemCount />
        <p>
          <code>Tienda ecommerce</code>
        </p>
      </div>
    </>
  )
}

export default App