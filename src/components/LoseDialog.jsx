import { useState, useEffect } from "react";
import hyuga from "../assets/hyuga.png";
import "../styles/Dialog.css";

function LoseDialog({
  setStartMenu, 
  setAnimation,
  animation, 
  setOnLose,
  setRestart
}) {
  const [selectBtn, setSelelctBtn] = useState("restart-game")

  const onKey = (event) => {
    if (event.code === "Enter") {
      if (selectBtn === "restart-game") {
        setAnimation(true)
        setRestart(true)
        setOnLose(false)
      } else if (selectBtn === "main-menu") {
        setAnimation(true)
        setStartMenu(true)
        setOnLose(false)
      }
    } else if (
      event.code === "ArrowDown" || 
      event.code === "ArrowUp"
    ) {
      if (selectBtn === "restart-game") {
        return setSelelctBtn("main-menu");
      } else if (selectBtn === "main-menu") {
        return setSelelctBtn("restart-game")
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
      >
        <div className="opacity-flow"></div>
        <div className="dialoge-window">
          <h1>You Lose!</h1>
          <img src={hyuga} alt="shin" />
          <p>Try again, better luck next time!</p>
          <button
            id="restart-game" 
            className="start-btn restart-game"
            onClick={(e) => {
              setAnimation(true)
              setOnLose(false)
              setRestart(true)
            }}
            onMouseOver={(e) => {
              setSelelctBtn("restart-game")
            }}
          >
            {selectBtn === "restart-game" ? <div className="symbol-loader">&#9658;</div> : ""}
            <span>Restart</span>
          </button>
          <button
            id="main-menu" 
            className="start-btn main-menu"
            onClick={(e) => {
              setAnimation(true)
              setStartMenu(true)
              setOnLose(false)
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

export default LoseDialog;