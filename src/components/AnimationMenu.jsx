import { useEffect, useState } from "react";
import "../styles/AnimationMenu.css";

function AnimationMenu({ setAnimation }) {
  useEffect(() => {
    return () => {
      setTimeout(() => {
        setAnimation(false)
      }, 3000)
    }
  },[])

  return (
    <>
      <div className="animation">
        <div className="sharingan" style={{position: "absolute"}}>
          <div className="inner-ring">
            <div className="tomoe"></div>
            <div className="tomoe"></div>
            <div className="tomoe"></div>
            <div className="circle"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AnimationMenu;