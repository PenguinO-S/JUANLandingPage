import React from 'react'
import image from '../images/coding.png'

function Hero2() {
  return (

    <section class ="hero2">
    <div class="hero_image_left"><img src={image} alt=""/></div>
    <h2 class="hero_title_right">¿Por qué deberías usar J.U.A.N?</h2>
    <p class="hero__text__right">J.U.A.N es un foro exclusivo para los estudiantes de programación de la Universidad Peruana de Ciencias Aplicadas, en el que podrás poner a prueba tus habilidades resolviendo problemas clásicos de programación, haciendo uso de lo aprendido en clase.
    <br/>
    <br/>
Podrás resolver tus dudas junto a cientos de usuarios que como tu, comparten la misma pasión por la programación. ¿Te estancaste con algún ejercicio o no pudiste entender bien algún tema de clase? La comunidad de J.U.A.N. puede tener la respuesta a todas tus dudas.

</p>
    </section>
  )
}

export default Hero2