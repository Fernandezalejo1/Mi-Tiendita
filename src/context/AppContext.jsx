// src/context/AppContext.jsx
import React, { createContext, useContext, useState, useEffect } from 'react';

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

export const AppProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Simular carga de productos desde una API
    const fetchProducts = async () => {
      const response = await new Promise(resolve => 
        setTimeout(() => resolve([
          { id: 1, name: 'Laptop', price: 999.99, description: 'Potente laptop para trabajo y juegos' },
          { id: 2, name: 'Smartphone', price: 499.99, description: 'Último modelo con cámara de alta resolución' },
          { id: 3, name: 'Auriculares', price: 99.99, description: 'Auriculares inalámbricos con cancelación de ruido' },
        ]), 1000)
      );
      setProducts(response);
    };

    fetchProducts();
  }, []);

  const login = (username, password) => {
    if (username === 'usuario' && password === 'contraseña') {
      setUser({ username });
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
    setCart([]);
  };

  const addToCart = (product) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id);
      if (existingItem) {
        return prevCart.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId));
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <AppContext.Provider value={{
      user,
      cart,
      products,
      login,
      logout,
      addToCart,
      removeFromCart,
      clearCart
    }}>
      {children}
    </AppContext.Provider>
  );
};