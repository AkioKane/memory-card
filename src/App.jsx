import { useState } from 'react'
import AnimationMenu from './components/AnimationMenu'
import StartBtnMenu from './components/StartBtnMenu'
import Game from './components/Game'
import './App.css'

function App() {
  const [startMenu, setStartMenu] = useState(true)
  const [animation, setAnimation] = useState(false)

  return (
    <>
      <div className="main">
        {/* Добавить вместо "" контейнер со сложностями */}
        { animation ? <AnimationMenu setAnimation={setAnimation} /> : "" }
        { startMenu ? <StartBtnMenu 
          setStartMenu={setStartMenu} 
          animation={animation} 
          setAnimation={setAnimation} 
        /> : <Game /> }
      </div>
    </>
  )
}

export default App
