import React from "react";
import { useState } from "react";

function FlippingState() {
  /**
   * Challenge:
   * Inizializa lo state con isGoingOut e settalo con un boolean
   * Crea un evento onClick sul div state--value e mettici un 
   * Ternary operator con Yes e No
   * upgrada lo state
   */

  const [weGoingOut, setWeGoingOut] = useState(false)

  function toggle() {
    setWeGoingOut(prevState => !prevState)
  }

  return (
    <div className="state">
      <h1 className="state--title">Do I feel like going out tonight?</h1>
      <div className="state--value" onClick={toggle}>
        <h1>{weGoingOut ? 'Yes' : 'No'}</h1>
      </div>
    </div>
  );
}

export default FlippingState;
