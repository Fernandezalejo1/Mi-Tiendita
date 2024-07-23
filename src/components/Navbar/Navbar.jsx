import React from 'react'
import CartWidget from './CartWidget'

const NavBar = () => {
  return (
    <nav>
        <h2>Tiendita</h2>
        <ul>
            <li><a href="/">Inicio</a></li>
            <li><a href="/productos">Productos</a></li>
            <li><a href="/categorias">Categorías</a></li>
            <li><a href="/contacto">Contacto</a></li>
        </ul>
        <CartWidget/>
    </nav>
  )
}

export default NavBar