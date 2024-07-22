import React from "react";
import Guess from "../Guess";
function Guesses({ guesses }) {
  const renderGuess = (guess) => {
    return <Guess guess={guess} />;
  };
  return (
    <div className="guess-results">
      {guesses.map((guess, index) => (
        <p key={index} className="guess">
          {renderGuess(guess)}
        </p>
      ))}
    </div>
  );
}

export default Guesses;
