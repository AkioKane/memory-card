import { useEffect, useState } from "react";
import AnimationMenu from "./AnimationMenu";
import "../styles/StartBtnMenu.css";

function StartBtnMenu({ setStartMenu, animation, setAnimation }) {
  const [selectBtn, setSelelctBtn] = useState("start-game")

  const onKey = (event) => {
    if (event.code === "Enter") {
      if (selectBtn === "start-game") {
        setAnimation(true)
        setStartMenu(false)
      } else if (selectBtn === "github") {
        window.open(
          "https://github.com/AkioKane/memory-card", "_blank"
        )
      }
    } else if (
      event.code === "ArrowDown" || 
      event.code === "ArrowUp"
    ) {
      if (selectBtn === "start-game") {
        return setSelelctBtn("github");
      } else if (selectBtn === "github") {
        return setSelelctBtn("start-game")
      }
    }
  }

  useEffect(() => {
    document.addEventListener("keydown", onKey)

    return () => {
      document.removeEventListener("keydown", onKey)
    }
  })

  const btnsSelection = () => {
    return (
      <>
        <div className="btn-menu">
          <h1>Memory Card</h1>
          <button
            id="start-game" 
            className="start-btn"
            onClick={(e) => {
              setAnimation(true)
              setStartMenu(false)
            }}
            onMouseOver={(e) => {
              setSelelctBtn("start-game")
            }}
          >
            {selectBtn === "start-game" ? <div className="symbol-loader">&#9658;</div> : ""}
            <span>Start Game</span>
          </button>
          <button
            id="github"
            className="start-btn"
            onMouseOver={(e) => {
              setSelelctBtn("github")
            }}
          >
            {selectBtn === "github" ? <div className="symbol-loader">&#9658;</div> : ""}
            <a 
              href="https://github.com/AkioKane/memory-card"
              target="_blank"
            >GitHub Repo</a>
          </button>
        </div>
      </>
    )
  }

  return (
    <div 
      className="start-menu-btn"
      style={{
        display: animation ? "none" : "flex"
      }}
    >
      <div 
        className="opacity-flow"
        style={{
          opacity: animation ? "0" : "0.5"
        }}
      ></div>
      { btnsSelection() }
    </div>
  );
}

export default StartBtnMenu;