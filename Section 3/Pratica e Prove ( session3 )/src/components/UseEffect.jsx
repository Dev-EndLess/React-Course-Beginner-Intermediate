import React from "react";
import { useState } from "react";
import { useEffect } from "react";

function UseEffect() {
    /**
   * Challenge:
   * Fai un fetch di questo endpoint `https://swapi.dev/api/people/1 usando useEffect
   * Mettilo in uno state di nome starWarsData
   * Nella component crea un h2 un button e un <pre> dove rendere JSON una stringa
   * Il pulsante button deve avere uno state con un counter
   * 
   */
  const [starWarsData, setStarWarsData] = useState({});
  const [count, setCount] = useState(1);

  useEffect(() => {
    async function getMeme() {
      const response = await fetch(`https://swapi.dev/api/people/${count}`)
      const data = await response.json()
      setStarWarsData(data)
    }
    getMeme()
  }, [count])

  return (
    <div>
      <h2>The count is {count}</h2>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>
        Get Next Character
      </button>
      <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
    </div>
  );
}

export default UseEffect;
