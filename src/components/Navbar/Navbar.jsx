
import React from 'react';
import { Link } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';

function Navbar() {
  const { user, logout, cart } = useAppContext();

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-xl font-bold">Mi Tienda</Link>
        <div>
          <Link to="/products" className="text-white mx-2">Productos</Link>
          <Link to="/cart" className="text-white mx-2">
            Carrito ({cart.reduce((sum, item) => sum + item.quantity, 0)})
          </Link>
          {user ? (
            <button onClick={logout} className="text-white mx-2">Cerrar sesión</button>
          ) : (
            <Link to="/login" className="text-white mx-2">Iniciar sesión</Link>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;