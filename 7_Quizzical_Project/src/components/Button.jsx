import React from "react";
import "../button.css";

function Button({ isSelected, onSelect, isCorrect, isIncorrect, isDisabled, children }) {
  const buttonClass = `button-74 ${isSelected ? "selected" : ""} ${isCorrect ? "correct" : ""} ${isIncorrect ? "incorrect" : ""}`;

  return (
    <div>
      <button className={buttonClass} onClick={onSelect} disabled={isDisabled}>
        {children}
      </button>
    </div>
  );
}

export default Button;
