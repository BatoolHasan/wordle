import React from "react";
import Guess from "../Guess";
function Guesses({ guesses, answer }) {
  const renderGuess = (guess) => {
    return <Guess guess={guess} answer={answer} />;
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
