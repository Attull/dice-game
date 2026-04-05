import React, { useEffect, useState } from 'react'
import "./Game.css"
import SelectNumber from '../../components/selectNumber/SelectNumber'
import RoleDice from '../../components/roleDice/RoleDice'
import TotalScore from '../../components/totalScore/TotalScore'

export default function Game() {
    let [random, setRandom] = useState(1)
    let [selNum, setSelNum] = useState(null)
    let [score, setScore] = useState(5)

    useEffect(() => {
        if (selNum == random) {
            setScore(score + 10)
        } else {
            setScore(score - 5)
        }

    },[random])

    return (
        <div>
            <div>
                <TotalScore score={score} />
                <SelectNumber selNum={selNum} setSelNum={setSelNum} />
            </div>
            <RoleDice random={random} setRandom={setRandom} />
        </div>
    )
}
