import React from 'react';
import CartWidget from '../cartwidget/cartwidget';

const Navbar = () => {
  return (
    <nav>
      <div className="logo">Repuestos</div>
      <ul>
        <li><a href="#">Inicio</a></li>
        <li><a href="#">Productos</a></li>
        <li><a href="#">Contacto</a></li>
      </ul>
      
    </nav>
  );
}
<CartWidget />
export default Navbar;
