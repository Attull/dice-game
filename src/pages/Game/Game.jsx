import React from 'react'
import "./Game.css"
import SelectNumber from '../../components/selectNumber/SelectNumber'
import RoleDice from '../../components/roleDice/RoleDice'
import TotalScore from '../../components/totalScore/TotalScore'

export default function Game() {
    let [ random, setRandom] = useState(1)
  return (
    <div>
        <div>
            <TotalScore />
            <SelectNumber />
        </div>
        <RoleDice random={random} setRandom={setRandom}/>
    </div>
  )
}
