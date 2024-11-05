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

function Card({ dataCharacters, setDataCharacters }) {
  const [dataCard, setDataCard] = useState(null);

  useEffect(() => {
    async function connectCharacter() {
      const response = await fetch(`https://narutodb.xyz/api/character/${randomID(1431)}`);
      const data = await response.json();
      
      setDataCharacters((prevData) => [...prevData, data]);
      setDataCard(data);
    }
    
    return () => {
      connectCharacter()
    }
  }, [setDataCharacters])

  return (
    <>
      <div 
        className="card"
        onClick={(e) => {
          // code...
        }}
      >
        
      </div>
    </>
  )
}

export default Card