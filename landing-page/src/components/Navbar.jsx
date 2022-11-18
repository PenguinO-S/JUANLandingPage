import React from 'react'
import logo from "./images/logo.png"

function Navbar() {
  return (


    // <div className="topnav">
    //     <div className='topnav-centered'>
    //         <a href="#">¿Por que J.U.A.N?</a>
    //         <a href="#">Nosotros</a>
    //         <a href="#">Video</a>
    //     </div>
    //     <a href="#" className='logo'>
    //          <img src={logo} alt="" />
    //     </a>

    //     <div className='topnav-right'>
    //         <a href="#" className='button header_cta'>Crear Cuenta</a>
    //     </div>
    // </div>
    <header>
    <a href="#" className='logo'>
              <img src={logo} alt="" />
    </a>
    <nav>
      <ul class="nav">
        <li><a href="#">¿Por que J.U.A.N?</a></li>
        <li><a href="#">Nosotros</a></li>
        <li><a href="#">Video</a></li>
      </ul>
    </nav>
    <a href="#" className='button header_cta'>Crear Cuenta</a>
  </header>
   )
}

export default Navbar;