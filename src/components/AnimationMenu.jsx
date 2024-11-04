import { useEffect, useState } from "react";
import "../styles/AnimationMenu.css";

function AnimationMenu({ setStartMenu }) {
  useEffect(() => {
    setTimeout(() => {
      setStartMenu(false)
    }, 3000)
  },[])

  return (
    <>
      <div className="sharingan" style={{position: "absolute"}}>
        <div className="inner-ring">
          <div className="tomoe"></div>
          <div className="tomoe"></div>
          <div className="tomoe"></div>
          <div className="circle"></div>
        </div>
      </div>
    </>
  );
}

export default AnimationMenu;