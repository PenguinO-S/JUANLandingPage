import React from 'react'

function HeroContent(props) {
  return (
    <section class ="hero">
    <div class="hero_image"><img src={props.image} alt=""/></div>
    <h2 class="hero_title">{props.title}</h2>
    <p class="hero__text__bg">{props.text}</p>
    </section>
  )
}

export default HeroContent