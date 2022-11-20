import React from 'react'
import imageCoding from "../images/astronauta.png"



function Hero1() {
  return (
    
    <section class ="hero">
    <div class="hero_image_right"><img src={imageCoding} alt=""/></div>
    <h2 class="hero_title_left">Si puedes imaginarlo,puedes programarlo</h2>
    <p class="hero__text__left">¿Tienes dudas acerca de programación? ¿Se te complican las estrucuras de datos?
        ¿Ya perdiste esperanzas comprendiendo los algoritmos?
      <br/>
      <br/>
        ¡Te presentamos J.U.A.N!
        <br/>
        <br/>
Más que una plataforma, es una comunidad de estudiantes como tú dispuestos a mejorar sus habilidades como programadores en desarrollo y con ganas de incrementar sus conociemientos dentro de los diferentes ambitos y lenguajes que  existen dentro de este mundo. Ademas de ayudarse entre si a descubrir su verdadero amor por la programacion.</p>
    </section>
  )
}

export default Hero1