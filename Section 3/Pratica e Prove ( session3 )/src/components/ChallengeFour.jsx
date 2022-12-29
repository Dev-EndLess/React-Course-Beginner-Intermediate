import React from "react";
import jokesData from "./data/jokesData";
import C4Joke from "./shared/C4Joke";

function ChallengeFour() {
  /**
   * Challenge:
   * Creare una variabile e mappare jokesData e creare una componente C4Joke
   * Passare tutti i props id/key/setup/punchline
   * Creare una funzione onclick che switchi da true a false lo state
   * lo state deve mostrare o nascondere il text della domanda
   * il testo sul bottone dovra' essere 'Show Punchline'
   * e quando verra' aperto dovra' apparire 'Hide Punchline'
   */

const jokesArray = jokesData.map(joke => {
  return <C4Joke
  id={joke.id}
  key={joke.id}
  setup={joke.setup}
  punchline={joke.punchline}
  />
})

  return <div>{jokesArray}</div>;
}
export default ChallengeFour;
