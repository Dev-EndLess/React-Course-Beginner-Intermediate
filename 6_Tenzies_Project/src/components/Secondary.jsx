import { nanoid } from "nanoid";
import React, { useEffect, useState } from "react";
import Die from "./Die";
import Confetti from "react-confetti";

function Secondary() {
  /**
   * Challenge :
   * Crea una funzione allNewDice nella quale ritorni
   * un array di 10 numeri random da 1 a 6
   * manda in console l'array
   **/

  /**
   * Challenge :
   * Crea uno state che memorizzi l'array di numeri allNewDice()
   * Usa map sullo state per generare un array di <Die/> components
   **/

  /**
   *
   * Challenge :
   * Crea un buttone con una funzione che rerolli i dadi
   * Cliccare il bottone dovrebbe generare un new Array di numeri
   * e settare lo state con il nuovo array
   * (this re-rendering the array to the page)
   */

  /**
   * Challenge :
   * Upgrada l'array di numeri nello state in modo che sia un oggetto
   * Ogni oggetto deve apparire cosi { value: <random number>, isHeld: false }
   * Making this change will break parts of our code, so make
   * sure to update things so we're back to a working state
   **/

  /**
   * Challenge :
   * Crea una funzione holdDice che prenda come parametro id.
   * per ora mandiamo un solo un console.log(id)
   *
   * Ora cerchiamo di passare la funzione per ogni Die Components
   * cosi al click dovrebbe loggare il suo ID unico
   *
   * next Challenge nel <Die/>
   **/

    /**
   * Challenge:
   * Upgrada la funzione holdDice in maniera che la proprieta'
   * isHeld switch da true a false ogni volta che un numero
   * dell'array viene cliccato basato sull id passato dal props
   *
   * Hint: as usual, there's > 1 way to accomplish this.
   * I'll be using `dice.map()` and checking for the `id`
   * of the die to determine which one to flip `isHeld` on,
   * but you can do whichever way makes the most sense to you.
   */

    /**
   * Challenge :
   * Upgrada la funzione rollDice in maniera che non upgradi tutti i dadi
   * ma che controlli i dadi che sono stati holdati , in maniera che
   * rerolli solo gli altri rimamenti
   *
   * Hint: this will look relatively similiar to the `holdDice`
   * function below. When creating new dice, remember to use
   * `id: nanoid()` so any new dice have an `id` as well.
   */

    /**
   * Challenge :
   * 1. Aggiungi un altro state tenzies impostato su false
   *    esso rappresenta se l'utente ha vinto oppure no
   *
   * 2. Aggiungi un effetto che triggheri ogni volta che lo state dice
   *    cambia. per ora manda solo un console.log("Dice state changed")
   */

    /**
   * Challenge :
   * Fai un check nell array per il winning conditions
   * 1. Tutti i dadi sono Held
   * 2. Tutti i dadi hanno lo stesso value
   *
   * Se entrambe le condizioni sono true, setta tenzies to True e
   * manda in console("Hai Vinto")
   */

  /**
   * Challenge :
   * Tie off loose ends!
   * 1. Se tenzies e' true, cambia il testo del buttone su "New Game"
   * 2. Se tenzies e' true, usa il pacchetto "react-confetti" per
   * triggherare la component
   */

    /**
   * Challenge :
   * Permetti al player di Cliccare sul bottone New Game
   * quando l'utente ha gia vinto
   */


  const [dice, setDice] = useState(allNewDice());
  const [tenzies, setTenzies] = useState(false)

  useEffect(() => {
    const allDiceHeld = dice.every(die => die.isHeld === true)
    const firstValue = dice[1].value
    const allSameValue = dice.every(die => die.value === firstValue)
    if (allDiceHeld && allSameValue) {
      setTenzies(true)
    } 
  }, [dice])

  function generateNewDie() {
    const randomNumber = Math.floor(Math.random() * 6) + 1
    return {
      id: nanoid(),
      value: randomNumber, 
      isHeld: false
    }
  }

  function allNewDice() {
    const newDice = []
    for (let i = 0; i < 10; i++) {
      newDice.push(generateNewDie())
    }
    return newDice
  }

  function rollDice() {
    if(tenzies === false) {

      setDice(prevDice => {
        return prevDice.map(die => {
          return die.isHeld ? die : generateNewDie()
        })
      })
    } else {
      setTenzies(false)
      setDice(allNewDice())
    }
  }

  function holdDice(id) {
    setDice(prevDice => {
      return prevDice.map(die => {
        return die.id === id ? {...die, isHeld: !die.isHeld} : die
      })
    })
  }

  const diceElements = dice.map(die => 
  <Die 
  value={die.value}
  id={die.id}
  key={die.id}
  isHeld={die.isHeld}
  holdDice={holdDice}
  />
  );

  return (
    <div className="main">
      {tenzies && <Confetti/>}
      <h1>Tenzies</h1>
      <h4>
        Roll until all dice are the same. Click each die to freeze it all its
        current value between rolls
      </h4>
      <div className="dice-container">{diceElements}</div>
      <div className="btn">
        <button 
        className="button"
        onClick={rollDice}
        >  
        {tenzies ? 'Restart the Game': 'Roll Dice'}</button>
      </div>
    </div>
  );
}

export default Secondary;
