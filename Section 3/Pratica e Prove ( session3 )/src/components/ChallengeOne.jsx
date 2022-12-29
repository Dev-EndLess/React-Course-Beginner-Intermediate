import React, { useState } from "react";

function ChallengeOne() {
  /**
   * Challenge: Creare uno state con un array di stringhe
   * Mappare la lista Array e metterla in un elemento <p>
   * aggiungere una funzione onClick per creare una nuova stringa
   * upgradare lo state con il vecchio array e la nuova stringa
   * mostrare la nuova lista sul browser
   */

  const [strings, setStrings] = useState(['Stringa 1', 'Stringa 2'])

  function addStrings() {
    const newString = `Stringa ${strings.length + 1}`
    setStrings([...strings, newString])
  }

  const stringsElements = strings.map(string => <p key={string}> {string}</p>) 

  return (
    <div>
      <button onClick={addStrings}>New String</button>
      {stringsElements}
    </div>
  );
}

export default ChallengeOne;
