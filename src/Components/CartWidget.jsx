import React from 'react';
import {  BiCart } from 'react-icons/bi';
const CartWidget = () => {
  // Supongamos que el número fijo es 0 por ahora
  const itemCount = 0;

  return (
    <div>
      {/* Aquí puedes colocar el ícono del carrito */}
      <a href="#Cart" className="flex items-center hover:text-gray-300">
        <BiCart className="mr-1 " size={24} />
        Carrito <span>({itemCount})</span>
      </a>
      
    </div>
  );
};

export default CartWidget;
