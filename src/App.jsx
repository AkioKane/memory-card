import { useState } from 'react'
import StartBtnMenu from './components/StartBtnMenu'
import './App.css'

function App() {
  const [startMenu, setStartMenu] = useState(true)

  return (
    <>
      <div className="main">
        {/* Добавить вместо "" контейнер со сложностями */}
        { startMenu ? <StartBtnMenu setStartMenu={setStartMenu} /> : "" }
        
      </div>
    </>
  )
}

export default App
