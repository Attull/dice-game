import React, { useState } from 'react'
import "./Home.css"

export default function Home(props) {

    const {flag, setFlag} = props

  return (
    <div className='home-container'>
        <div>
            <img src="dices.png" alt="" />    
        </div>
        <div className='home-container-text'>
            <h1>Dice Game</h1>
            <button onClick={()=>setFlag(!flag)}>Play Game</button>
        </div>

    </div>
  )
}
