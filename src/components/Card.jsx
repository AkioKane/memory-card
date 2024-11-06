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

function Card({ dataCharacters, setDataCharacters, setRandCharacter, character=null }) {
  const [dataCard, setDataCard] = useState(null);

  useEffect(() => {
    async function connectCharacter() {
      if (dataCharacters.length >= 12) return;

      const response = await fetch(`https://narutodb.xyz/api/character/${randomID(1431)}`);
      const data = await response.json();

      data.clicked = false;

      if (data.images.length === 0) {
        return connectCharacter()
      }

      try {
        const image = await fetch(data.images[0])

        if (!image.ok) {
          return connectCharacter()
        }
      } catch (error) {
        console.error(error.message);
      }
      
      setDataCharacters((prevData) => {
        if (prevData.length < 12) {
          return [...prevData, data];
        }
        return prevData;
      });
      setDataCard(data);
    }

    if (character !== null) {
      setDataCard(character)
    } else {
      connectCharacter()
    }

    return () => {};
  }, [setDataCharacters, character])
  
  return (
    <>
      <div 
        className="card"
        onClick={(e) => {
          setRandCharacter(true)
          if (dataCard.clicked === true) {
            return console.log("Lose")
          }
          dataCard.clicked = true;
        }}
      >
        <img 
          src={dataCard ? dataCard.images[0] : ""} 
          alt=""
          draggable="false"
        />
        <h3>{dataCard ? dataCard.name : ""}</h3>
      </div>
    </>
  )
}

export default Card