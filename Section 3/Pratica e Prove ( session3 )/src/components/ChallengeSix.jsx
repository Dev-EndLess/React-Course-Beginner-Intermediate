import React from "react";
import { useState } from "react";
import C6WindowTracker from "./shared/C6WindowTracker";

function ChallengeSix() {

  const [show, setShow] = useState(true)

  function toggle() {
    setShow(prevState => !prevState)
  }

  return (
    <div className="container"> 
      <button 
      className="buttonC6" 
      onClick={toggle}>WindowTracker 
      </button>
      {show && <C6WindowTracker />} 
    </div>
    // controlla il component
  );
}

export default ChallengeSix;
