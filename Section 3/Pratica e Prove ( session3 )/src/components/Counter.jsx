import React from "react";
import Count from "./shared/Count";
import { useState } from "react";

function Counter() {
  /**
   * Challenge:
   * crea uno state con nome counter e settalo a 0
   * crea un evento onclick per entrambi i pulsanti + e -
   * crea le 2 funzioni per incrementare o sottrarre (setCounter)
   * passa il props sulla componente count
   * mostra il contatore sull UI
   */

  const [counter, setCounter] = useState(0);

  function up() {
    setCounter(prevState => prevState + 1);
  }

  function down() {
    setCounter(prevState => prevState - 1);
  }

  return (
    <div className="counter">
      <button onClick={up} 
      className="counter--minus"> +
      </button>
      <div className="counter--count">
        <Count count={counter} />
      </div>
      <button onClick={down} 
      className="counter--plus"> -
      </button>
    </div>
  );
}

export default Counter;
