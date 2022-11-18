import React from 'react'

function TeamBox(props) {
  return (

        <div class="team__member">
            <img src={props.image}/>
            <div class=".team__text">{props.name}</div>
        </div>

  )
}

export default TeamBox