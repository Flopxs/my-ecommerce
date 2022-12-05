import React from 'react';
import CartWidget from '../CartWidget';
import bootstrap from 'bootstrap/dist/css/bootstrap.css';
import Brand from '../Brand';
import './styles.css'


export const NavBar = () => {
    return(

<ul className="nav">
<a className="nav-link" href="#"> <Brand /></a>
  <li className="nav-item">
    <a className="nav-link" href="#">Inicio</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">Productos</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">Contacto</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#"> <CartWidget /></a>
  </li>
</ul>


    );
}




export default NavBar;