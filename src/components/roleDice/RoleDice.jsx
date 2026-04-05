import React, { useState } from 'react'

export default function RoleDice({random, setRandom}) {



  return (
    <div>
        <img src={`dice_${random}.png`} alt="" onClick={()=>setRandom(Math.ceil((Math.random(0,1)*6)))}/>
    </div>
  )
}
