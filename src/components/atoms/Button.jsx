import React from 'react';

const Button = ({ 
  children, 
  onClick, 
  variant = 'danger', 
  size = 'md',
  disabled = false,
  className = '',
  type = 'button',
  ...props 
}) => {
  const baseStyles = 'font-bold rounded transition-colors duration-200 cursor-pointer';
  
  const variants = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 disabled:bg-gray-400',
    secondary: 'bg-gray-200 text-gray-900 hover:bg-gray-300 disabled:bg-gray-400',
    danger: 'bg-red-600 text-white hover:bg-red-700 disabled:bg-gray-400',
  };
  
  const sizes = {
    sm: 'px-3 py-1 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };
  
  const buttonClass = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;
  
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={buttonClass}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;