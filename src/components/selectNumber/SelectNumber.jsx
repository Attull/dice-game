import React, { useState } from 'react'

export default function SelectNumber() {
    var diceNum = [1,2,3,4,5,6]

    let [selNum, setSelNum] = useState(null)

  return (
    <div className='selectNumber-container'>
        {
            diceNum.map((val)=>{
                return (
                    <div className={`box ${(val==selNum) ? "selected" : ""}`}   onClick={()=>setSelNum(val)} >{val}</div>
                )
            })
        }
    </div>
  )
}
