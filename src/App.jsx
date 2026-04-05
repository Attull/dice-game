import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Home from './pages/Home/Home'
import Game from './pages/Game/Game'

function App() {
  let [flag, setFlag] = useState(true)  

  return (
    <div>
      {
        (flag) ? <Home flag={flag} setFlag={setFlag} /> : <Game />
      }

    </div>
  )
}

export default App
