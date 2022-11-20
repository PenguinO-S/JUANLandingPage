import React from 'react'
import logo from "../images/juan_mostacho.png"

function Navbar() {
  return (

    <header>
    <a href="#" className='logo'>
              <img src={logo} alt="" />
    </a>
    <nav>
      <ul class="nav">
        <li><a href="#hero2">¿Por que J.U.A.N?</a></li>
        <li><a href="#team">Nosotros</a></li>
        <li><a href="#video">Video</a></li>
      </ul>
    </nav>
    <a href="#" className='button header_cta'>Crear Cuenta</a>
  </header>
   )
}

export default Navbar;