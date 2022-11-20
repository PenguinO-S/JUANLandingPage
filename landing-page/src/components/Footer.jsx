import React from 'react'
import logo from "../images/juan_mostacho.png"
import facebook from "../images/Facebook_Logo.png"
import instagram from "../images/Instagram_icon.png"

function Footer() {
  return (
    <footer>
        <ul>
        <div className='footer-left'>
            <a href="#main" className='logoo'>
                <img src={logo} alt="" />
            </a>
            <a href="https://www.facebook.com/people/Pingunio-Feliz/100087616497296/" className='fb'target="_blank" rel="noopener noreferrer">
                <img src={facebook} alt="" />
            </a>
            <a href="https://www.instagram.com/penguin_os_official/" className='insta'target="_blank" rel="noopener noreferrer">
                <img src={instagram} alt="" />
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