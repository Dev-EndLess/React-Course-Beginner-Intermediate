import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { nanoid } from 'nanoid'
import Die from './Die'
import Confetti from 'react-confetti'

function Main() {
  /**
 * Challenge 1: 
 * Create a `Roll Dice` button that will re-roll
 * all 10 dice
 * 
 * Clicking the button should generate a new array of numbers
 * and set the `dice` state to that new array (thus re-rendering
 * the array to the page)
 */

  /**
 * Challenge 2: 
 * Create a function `holdDice` that takes
 * `id` as a parameter. For now, just have the function
 * console.log(id).
 * 
 * Then, figure out how to pass that function down to each
 * instance of the Die component so when each one is clicked,
 * it logs its own unique ID property. (Hint: there's more
 * than one way to make that work, so just choose whichever
 * you want)
 * 
 */

  /**
 * Challenge 3: 
 * Update the `holdDice` function to flip
 * the `isHeld` property on the object in the array
 * that was clicked, based on the `id` prop passed
 * into the function.
 * 
 * Hint: as usual, there's > 1 way to accomplish this.
 * I'll be using `dice.map()` and checking for the `id`
 * of the die to determine which one to flip `isHeld` on,
 * but you can do whichever way makes the most sense to you.
 */

  /**
 * Challenge 4: 
 * Update the `rollDice` function to not just roll
 * all new dice, but instead to look through the existing dice
 * to NOT role any that are being `held`.
 * 
 * Hint: this will look relatively similiar to the `holdDice`
 * function below. When creating new dice, remember to use
 * `id: nanoid()` so any new dice have an `id` as well.
 */

  /**
 * Challenge 5:
 * 1. Add new state called `tenzies`, default to false. It
 *    represents whether the user has won the game yet or not.
 * 2. Add an effect that runs every time the `dice` state array 
 *    changes. For now, just console.log("Dice state changed").
 */

  /**
 * Challenge 6: 
 * Check the dice array for these winning conditions:
 * 1. All dice are held, and
 * 2. all dice have the same value
 * 
 * If both conditions are true, set `tenzies` to true and log
 * "You won!" to the console
 */

  /**
 * Challenge 7: 
 * Tie off loose ends!
 * 1. If tenzies is true, Change the button text to "New Game"
 * 2. If tenzies is true, use the "react-confetti" package to
 *    render the <Confetti /> component 🎉
 * 
 *    Hint: don't worry about the `height` and `width` props
 *    it mentions in the documentation.
 */

  /**
 * Challenge 8: 
 * Allow the user to play a new game when the
 * button is clicked and they've already won
 */

  const [dice, setDice] = useState(allNewDice())
  const [tenzies, setTenzies] = useState(false)

  useEffect(() => {
    const allDiceHeld = dice.every(die => die.isHeld === true)
    const indexDice = dice[0].value
    const allSameValue = dice.every(die => die.value === indexDice)
    if(allDiceHeld && allSameValue) {
      setTenzies(true)
      setDice(allNewDice())
    }
  }, [dice])

  function generateNewDie() {
    const randomNum = Math.floor(Math.random() * 6) + 1
    return {
      id: nanoid(),
      value: randomNum, 
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
    if(!tenzies) {

      setDice(prevDice => {
        return prevDice.map(die => {
          return die.isHeld ? die : 
          generateNewDie()
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
    key={die.id}
    id={die.id}
    value={die.value}
    isHeld={die.isHeld}
    holdDice={holdDice}
    />
  )

  return (
    <div className='main'>
      {tenzies === true ? <Confetti/> : ''} 
      <h1>Tenzies</h1>
      <h4>Roll until all dice are the same.
        Click each die to freeze it all its current value between rolls
      </h4>
      <div className='dice-container'>
        {diceElements}
      </div>
      <div className='btn'>
      <button 
      className='button'
      onClick={rollDice}
      >{tenzies === true ? 'Restart Game' : 'Roll'}
      </button>
      </div>
    </div>
  )
}

export default Main