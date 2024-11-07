import { useState, useEffect } from "react";
import Card from "./Card";
import naruto from "../assets/uzumaki.png";
import sasuke from "../assets/uchiha.png";
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
  const [clicked, setClicked] = useState(false)
  const [score, setScore] = useState(0)
  const [highScore, setHighScore] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      setCallDown(true)
    }, 500)

    return () => {
      clearTimeout(timer)
    }
  })

  useEffect(() => {
    if (score > highScore) {
      setHighScore(score)
    }

    if (score === 24) {
      // component Win!
      console.log("Win!")
    }
  }, [score])

  useEffect(() => {
    if (randCharacter) {
      setDataCharacters(getBalancedItems())
      setRandCharacter(false)
    }
  }, [randCharacter])

  const getBalancedItems = () => {
    const clickedItems = dataCharacters.filter(item => item.clicked);
    const unclickedItems = dataCharacters.filter(item => !item.clicked);

    const numClickedInFirstHalf = Math.floor(12 / 2);
    const numUnclickedInFirstHalf = 12 - numClickedInFirstHalf;
  
    const selectedClickedItems = shuffleCards(clickedItems).slice(0, numClickedInFirstHalf);
    const selectedUnclickedItems = shuffleCards(unclickedItems).slice(0, numUnclickedInFirstHalf);
  
    const firstHalf = shuffleCards([...selectedClickedItems, ...selectedUnclickedItems]);
    const remainingItems = [...clickedItems.slice(numClickedInFirstHalf), ...unclickedItems.slice(numUnclickedInFirstHalf)];
    const selectedItems = [...firstHalf, ...remainingItems];

    return selectedItems;
  };

  const cards = () => {
    const card = Array.from({ length: 12 }, (_, index) => (
      <Card 
        key={index}
        dataCharacters={dataCharacters}
        setRandCharacter={setRandCharacter}
        character={dataCharacters[index]}
        setClicked={setClicked}
        score={score}
        setScore={setScore}
        setDataCharacters={setDataCharacters}
      />
    ))

    return <>{card}</>
  }

  return (
    <>
      <div className="game" style={{
        display: callDown ? "flex" : "none"
      }}>
        <div className="stats">
          <h1>
            <img src={sasuke} alt="ninja1" />
            Memory Card
            <img src={naruto} alt="ninja2" />
          </h1>
          <div className="score-stats">
            <h2>Score {score}</h2>
            <h2>High Score {highScore}</h2>
          </div>

        </div>

        <div 
          className="card-container"
          style={{
            opacity: clicked ? "0" : "1",
            transition: "all 0.3s ease-in-out" 
          }}
        >
          {cards()}
        </div>
      </div>
    </>
  )
}

export default Game;