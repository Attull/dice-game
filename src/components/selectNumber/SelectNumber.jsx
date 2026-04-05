import React, { useState } from 'react'

export default function SelectNumber({selNum, setSelNum}) {
    var diceNum = [1,2,3,4,5,6]



  return (
    <div className='selectNumber-container'>
        {
            diceNum.map((val)=>{
                return (
                    <div key={val} className={`box ${(val==selNum) ? "selected" : ""}`}   onClick={()=>setSelNum(val)} >{val}</div>
                )
            })
        }
    </div>
  )
}
