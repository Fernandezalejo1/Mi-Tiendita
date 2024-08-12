// src/pages/ProductList.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';

function ProductList() {
  const { products, addToCart } = useAppContext();

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">Productos</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {products.map((product) => (
          <div key={product.id} className="border p-4 rounded">
            <h3 className="text-xl font-semibold">{product.name}</h3>
            <p className="text-gray-600">${product.price}</p>
            <Link to={`/product/${product.id}`} className="text-blue-500 hover:underline block mb-2">
              Ver detalles
            </Link>
            <button 
              onClick={() => addToCart(product)} 
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Agregar al carrito
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;