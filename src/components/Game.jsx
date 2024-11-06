import { useState, useEffect } from "react";
import Card from "./Card";
import "../styles/Game.css";

function shuffleCards(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    
    [array[i], array[j]] = [array[j], array[i]];
  }

  return array;
}

function Game() {
  const [dataCharacters, setDataCharacters] = useState([])
  const [callDown, setCallDown] = useState(false)
  const [randCharacter, setRandCharacter] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setCallDown(true)
    }, 1000)

    return () => {
      clearTimeout(timer)
    }
  })

  useEffect(() => {
    if (randCharacter) {
      setRandCharacter(shuffleCards(dataCharacters))
      setRandCharacter(false)
    }
  }, [randCharacter])

  return (
    <>
      <div className="game" style={{
        display: callDown ? "flex" : "none"
      }}>
        <div className="card-container">
          <Card 
            key={0}
            dataCharacters={dataCharacters}
            setDataCharacters={setDataCharacters}
            setRandCharacter={setRandCharacter}
            character={dataCharacters[0]}
          />
          <Card 
            key={1}
            dataCharacters={dataCharacters}
            setDataCharacters={setDataCharacters}
            setRandCharacter={setRandCharacter}
            character={dataCharacters[1]}
          />
          <Card 
            key={2}
            dataCharacters={dataCharacters}
            setDataCharacters={setDataCharacters}
            setRandCharacter={setRandCharacter}
            character={dataCharacters[2]}
          />
          <Card 
            key={3}
            dataCharacters={dataCharacters}
            setDataCharacters={setDataCharacters}
            setRandCharacter={setRandCharacter}
            character={dataCharacters[3]}
          />
          <Card 
            key={4}
            dataCharacters={dataCharacters}
            setDataCharacters={setDataCharacters}
            setRandCharacter={setRandCharacter}
            character={dataCharacters[4]}
          />
          <Card 
            key={5}
            dataCharacters={dataCharacters}
            setDataCharacters={setDataCharacters}
            setRandCharacter={setRandCharacter}
            character={dataCharacters[5]}
          />
          <Card 
            key={6}
            dataCharacters={dataCharacters}
            setDataCharacters={setDataCharacters}
            setRandCharacter={setRandCharacter}
            character={dataCharacters[6]}
          />
          <Card
            key={7} 
            dataCharacters={dataCharacters}
            setDataCharacters={setDataCharacters}
            setRandCharacter={setRandCharacter}
            character={dataCharacters[7]}
          />
          <Card 
            key={8}
            dataCharacters={dataCharacters}
            setDataCharacters={setDataCharacters}
            setRandCharacter={setRandCharacter}
            character={dataCharacters[8]}
          />
          <Card 
            key={9}
            dataCharacters={dataCharacters}
            setDataCharacters={setDataCharacters}
            setRandCharacter={setRandCharacter}
            character={dataCharacters[9]}
          />
          <Card 
            key={10}
            dataCharacters={dataCharacters}
            setDataCharacters={setDataCharacters}
            setRandCharacter={setRandCharacter}
            character={dataCharacters[10]}
          />
          <Card 
            key={11}
            dataCharacters={dataCharacters}
            setDataCharacters={setDataCharacters}
            setRandCharacter={setRandCharacter}
            character={dataCharacters[11]}
          />
        </div>
      </div>
    </>
  )
}

export default Game;