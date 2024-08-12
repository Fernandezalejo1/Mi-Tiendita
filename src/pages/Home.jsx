// src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="container mx-auto mt-8 text-center">
      <h1 className="text-4xl font-bold mb-4">Bienvenido a Mi Tienda</h1>
      <p className="text-xl mb-8">Encuentra los mejores productos aquí.</p>
      <Link to="/products" className="bg-blue-500 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-600 transition-colors">
        Ver productos
      </Link>
    </div>
  );
}

export default Home;