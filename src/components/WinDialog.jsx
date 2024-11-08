import { useState, useEffect } from "react";
import shino from "../assets/shino.png";
import "../styles/Dialog.css";

function WinDialog({
  setStartMenu, 
  setAnimation,
  animation, 
  setOnWin 
}) {
  const [selectBtn, setSelelctBtn] = useState("main-menu")
  const [opacity, setOpacity] = useState(0)

  useEffect(() => {
    const timer =  setTimeout(() => {
      setOpacity(1)
    }, 500) 

    return () => {
      clearTimeout(timer)
    }
  })

  const onKey = (event) => {
    if (event.code === "Enter") {
      if (selectBtn === "main-menu") {
        setAnimation(true)
        setStartMenu(true)
        setOnWin(false)
      }
    }
  }

  useEffect(() => {
    document.addEventListener("keydown", onKey)

    return () => {
      document.removeEventListener("keydown", onKey)
    }
  })

  return (
    <>
      <div 
        className="dialog start-menu-btn"
        style={{
          opacity: opacity
        }}
      >
        <div className="opacity-flow"></div>
        <div className="dialoge-window">
          <h1>You Win!</h1>
          <img src={shino} alt="shin" />
          <p>Great, you've completed the game!</p>
          <button
            id="main-menu" 
            className="start-btn main-menu"
            onClick={(e) => {
              setAnimation(true)
              setStartMenu(true)
              setOnWin(false)
            }}
            onMouseOver={(e) => {
              setSelelctBtn("main-menu")
            }}
          >
            {selectBtn === "main-menu" ? <div className="symbol-loader">&#9658;</div> : ""}
            <span>Main Menu</span>
          </button>
        </div>
      </div>
    </>
  )
};

export default WinDialog;