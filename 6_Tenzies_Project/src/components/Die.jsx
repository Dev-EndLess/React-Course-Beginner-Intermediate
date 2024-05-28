import React from "react";

function Die(props) {
  /**
   * Challenge:
   * Aggiungi un conditional styling al component in maniera che
   * se (isHeld === true) il background color deve cambiare
   */

  const styles = {
    backgroundColor: props.isHeld ? "#78FF5A" : "#C8DCFF",
  };

  return (
    <div
      className="die"
      style={styles}
      onClick={() => props.holdDice(props.id)}
    >
      {props.value}
    </div>
  );
}

export default Die;
