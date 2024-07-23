import React from 'react';
import './Button.css'; 

const Button = ({ 
  text, 
  onClick, 
  type = 'button', 
  disabled = false, 
  variant = 'primary', 
  size = 'medium' 
}) => {
  return (
    <button
      className={`custom-button ${variant} ${size}`}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default Button;