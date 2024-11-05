import { useEffect, useState } from "react";
import "../styles/AnimationMenu.css";

function AnimationMenu({ setAnimation }) {
  useEffect(() => {
    let isMounted = true;
    
    const timer = setTimeout(() => {
      if (isMounted) {
        setAnimation(false)
      }
    }, 3000);

    return () => {
      isMounted = false;
      clearTimeout(timer);
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