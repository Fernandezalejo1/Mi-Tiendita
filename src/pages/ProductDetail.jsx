// src/pages/ProductDetail.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';

function ProductDetail() {
  const { id } = useParams();
  const { products, addToCart } = useAppContext();
  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return <div className="container mx-auto mt-8">Producto no encontrado</div>;
  }

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">{product.name}</h2>
      <p className="text-gray-600 mb-2">${product.price}</p>
      <p className="mb-4">{product.description}</p>
      <button 
        onClick={() => addToCart(product)} 
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
      >
        Agregar al carrito
      </button>
    </div>
  );
}

export default ProductDetail;