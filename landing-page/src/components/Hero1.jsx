import React from 'react'
import HeroContent from './HeroContent'
import imageCoding from "../images/coding.png"



function Hero1() {
  return (
    <div>
        <HeroContent image={imageCoding} 
        title="Si puedes imaginarlo,puedes programarlo" 
        text="¿Tienes dudas acerca de programación? ¿Se te complican las estrucuras de datos?
        ¿Ya perdiste esperanzas comprendiendo los algoritmos?

        ¡Te presentamos J.U.A.N!

Más que una plataforma, es una comunidad de estudiantes como tú dispuestos a mejorar sus habilidades como programadores en desarrollo y con ganas de incrementar sus conociemientos dentro de los diferentes ambitos y lenguajes que  existen dentro de este mundo. Ademas de ayudarse entre si a descubrir su verdadero amor por la programacion."
/>
    </div>
  )
}

export default Hero1