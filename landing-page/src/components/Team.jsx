import React from 'react'
import TeamBox from './TeamBox'
import member1 from '../images/Juan.png'
import member2 from '../images/Luis.png'
import member3 from '../images/Marcelo.png'
import member4 from '../images/Rebeca.png'
import member5 from '../images/Sofia.png'

function Team() {
  return (
    <section class ="hero">
    <br/>
    <h2 class="team__title">PenguinOS</h2>
    <div class='team__container'>
        <TeamBox image= {member1} name="Juan Benites"/>
        <TeamBox image= {member2} name="Luis Pineda"/>
        <TeamBox image= {member3} name="Marcelo Guerrero"/>
        <TeamBox image= {member4} name="Rebeca Bravo"/>
        <TeamBox image= {member5} name="Sofia Miranda"/>

    </div>
    </section>
  )
}

export default Team