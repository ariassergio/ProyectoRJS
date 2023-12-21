import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';
import { BiAlignRight, BiCart, BiX } from 'react-icons/bi';

const Navbar = () => {
  const [isResponsive, setIsResponsive] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const handleResize = () => {
    if (window.innerWidth <= 768) {
      setIsResponsive(true);
    } else {
      setIsResponsive(false);
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">Tienda AS🌟</div>
        {isResponsive ? (
          showMenu ? (
            <BiX className="text-3xl cursor-pointer" onClick={toggleMenu} />
          ) : (
            <BiAlignRight className="text-3xl cursor-pointer" onClick={toggleMenu} />
          )
        ) : (
          <ul className="flex space-x-4">
            <li>
              <Link to href="/" className="hover:text-gray-300">
                Productos
              </Link>
            </li>
            <li>
              <a href="#Servicios" className="hover:text-gray-300">
                Indumentaria
              </a>
            </li>
            <li>
              <a href="#Contactos" className="hover:text-gray-300">
                Accesorios
              </a>
            </li>
            <li>
              <CartWidget />
            </li>
          </ul>
          
        )}
        {isResponsive && showMenu && (
          <div className="flex flex-col">
            <ul className="flex flex-col space-y-2">
              <li>
                <Link to href="/" className="hover:text-gray-300">
                  Productos
                </Link>
              </li>
              <li>
                <a href="#Servicios" className="hover:text-gray-300">
                  Indumentaria
                </a>
              </li>
              <li>
                <a href="#Contactos" className="hover:text-gray-300">
                  Accesorios
                </a>
              </li>
              <li>
                <CartWidget />
              </li>
            </ul>
          </div>
        )}
      </div>
      
    </nav>
  );
};

export default Navbar;






