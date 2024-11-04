import { useEffect, useState } from "react";
import AnimationMenu from "./AnimationMenu";
import "../styles/StartBtnMenu.css";

function StartBtnMenu({ setStartMenu }) {
  const [selectBtn, setSelelctBtn] = useState("start-game")
  const [animation, setAnimation] = useState(false)

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
    <div className="start-menu-btn">
      <div className="opacity-flow"></div>
      { animation ? <AnimationMenu setStartMenu={setStartMenu} /> : btnsSelection()}
    </div>
  );
}

export default StartBtnMenu;