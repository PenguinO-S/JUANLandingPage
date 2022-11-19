import React from 'react'
import logo from "../images/juan_mostacho.png"

function Footer() {
  return (
    <footer>
        <ul>
        <div className='footer-left'>
            <a href="#" className='logoo'>
                <img src={logo} alt="" />
            </a>
        </div>
        <div className='footer-right'>
            <a href="#" className='button header_cta'>Crear Cuenta</a>
            <h6>© J.U.A.N by PenguinOS All Rights Reserved</h6>
        </div>
        </ul>
    </footer>
  )
}

export default Footer