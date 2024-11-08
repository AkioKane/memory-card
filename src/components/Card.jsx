import { useState, useEffect } from "react";
import "../styles/Card.css"

const randomArray = []

function randomID(maxValue) {
  const number = Math.floor(Math.random() * (maxValue+1));
  if (randomArray.includes(number)) {
    return randomID(maxValue)
  }
  randomArray.push(number)
  return number;
}

function Card({ 
  dataCharacters, 
  setDataCharacters, 
  onWin,
  onLose,
  setOnLose, 
  setScore, 
  setRandCharacter, 
  setClicked, 
  character=null 
}) {
  const [dataCard, setDataCard] = useState(null);

  async function connectCharacter() {
    if (dataCharacters.length >= 12) return;
  
    const response = await fetch(`https://narutodb.xyz/api/character/${randomID(1431)}`);
    const data = await response.json();
  
    data.clicked = false;
    data.selected = false;
  
    if (data.images.length === 0) {
      return connectCharacter();
    }
  
    try {
      const image = await fetch(data.images[0])
  
      if (!image.ok) {
        return connectCharacter();
      }
    } catch (error) {
      console.error(error.message);
      return connectCharacter();
    }
    
    character ? setDataCard(character) : setDataCard(data);
    setDataCharacters((prevData) => [...prevData, data]);

    return data;
  }

  const connect = () => {
    if (character !== null) {
      setDataCard(character)
    } else {
      connectCharacter()
    }
  }

  useState(() => {
    connect()

    return () => {
      console.log('Очистка эффекта');
    };
  }, [setDataCharacters, character, dataCharacters])

  return (
    <>
      <div 
        className="card"
        style={{
          transform: (onWin || onLose) ? "none" : "inherit"
        }}
        onClick={(e) => {
          if (character.clicked === true) {
            setOnLose(true)
            setClicked(true);
            setTimeout(() => {
              setClicked(false)
            }, 500);
            return;
          }

          character.clicked = true;
          character.selected = true;
          
          setScore(((score) => score + 1));
          setRandCharacter(true);
          setDataCard(character);

          // console.log(dataCharacters);

          setClicked(true);
          setTimeout(() => {
            setClicked(false)
          }, 500);
        }}
      >
        <img
          src={character ? character.images[0] : ""}
          alt={character ? character.name : "Loading..."}
          draggable="false"
        />
        <h3>{character ? character.name : "Loading..."}</h3>
      </div>
    </>
  )
}

export default Card