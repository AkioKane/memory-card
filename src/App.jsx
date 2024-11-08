import { useState } from 'react'
import AnimationMenu from './components/AnimationMenu'
import StartBtnMenu from './components/StartBtnMenu'
import WinDialog from "./components/WinDialog";
import LoseDialog from "./components/LoseDialog";
import Game from './components/Game'
import './App.css'

function App() {
  const [startMenu, setStartMenu] = useState(true)
  const [animation, setAnimation] = useState(false)
  const [restart, setRestart] = useState(false)
  const [highScore, setHighScore] = useState(0);
  const [onWin, setOnWin] = useState(false);
  const [onLose, setOnLose] = useState(false);

  const checkRestart = () => {
    if (restart) {
      return "";
    } 
    if (onLose || onWin) {
      return "";
    }
    return <>
      <Game 
        key={"game"}
        setStartMenu={setStartMenu} 
        animation={animation} 
        setAnimation={setAnimation} 
        setRestart={setRestart}
        highScore={highScore}
        setHighScore={setHighScore}
        onWin={onWin}
        setOnWin={setOnWin}
        onLose={onLose}
        setOnLose={setOnLose}
      />
    </>
  }

  return (
    <>
      <div className="main">
        {/* Добавить вместо "" контейнер со сложностями */}
        { animation ? <AnimationMenu key={""} setAnimation={setAnimation} /> : "" }
        {onWin ? <WinDialog
          key={"win-dialog"} 
          setOnWin={setOnWin}
          setStartMenu={setStartMenu} 
          animation={animation} 
          setAnimation={setAnimation} 
        /> : ""}
        {onLose ? <LoseDialog 
          key={"lose-dialog"}
          setOnLose={setOnLose}
          setStartMenu={setStartMenu} 
          animation={animation} 
          setAnimation={setAnimation} 
          setRestart={setRestart}
        /> : ""}
        { startMenu ? <StartBtnMenu 
          key={"start-game"}
          setStartMenu={setStartMenu} 
          animation={animation} 
          setAnimation={setAnimation} 
        /> : checkRestart() }
        {restart ? <Game 
          key={"game"}
          setStartMenu={setStartMenu} 
          animation={animation} 
          setAnimation={setAnimation} 
          setRestart={setRestart}  
          highScore={highScore}
          setHighScore={setHighScore} 
          onWin={onWin}
          setOnWin={setOnWin}
          onLose={onLose}
          setOnLose={setOnLose}  
        /> : ""}
      </div>
    </>
  )
}

export default App
