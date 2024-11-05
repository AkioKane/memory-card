import { useState } from "react";
import Card from "./Card";
import "../styles/Game.css";

function Game() {
  const [dataCharacters, setDataCharacters] = useState([])

  return (
    <>
      <div className="game">
        <div className="card-container">
          <Card 
            dataCharacters={dataCharacters}
            setDataCharacters={setDataCharacters}
          />
          <Card 
            dataCharacters={dataCharacters}
            setDataCharacters={setDataCharacters}
          />
          <Card 
            dataCharacters={dataCharacters}
            setDataCharacters={setDataCharacters}
          />
          <Card 
            dataCharacters={dataCharacters}
            setDataCharacters={setDataCharacters}
          />
          <Card 
            dataCharacters={dataCharacters}
            setDataCharacters={setDataCharacters}
          />
          <Card 
            dataCharacters={dataCharacters}
            setDataCharacters={setDataCharacters}
          />
          <Card 
            dataCharacters={dataCharacters}
            setDataCharacters={setDataCharacters}
          />
          <Card 
            dataCharacters={dataCharacters}
            setDataCharacters={setDataCharacters}
          />
          <Card 
            dataCharacters={dataCharacters}
            setDataCharacters={setDataCharacters}
          />
          <Card 
            dataCharacters={dataCharacters}
            setDataCharacters={setDataCharacters}
          />
          <Card 
            dataCharacters={dataCharacters}
            setDataCharacters={setDataCharacters}
          />
          <Card 
            dataCharacters={dataCharacters}
            setDataCharacters={setDataCharacters}
          />
        </div>
      </div>
    </>
  )
}

export default Game;