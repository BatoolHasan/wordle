import React from "react";
import { checkGuess } from "../../game-helpers";

function Guess({ guess, answer }) {
  const result = checkGuess(guess, answer);

  return (
    <>
      {guess.split("").map((letter, index) => (
        <span
          className={`cell ${letter !== " " && result[index].status}`}
          key={index}
        >
          {letter}
        </span>
      ))}
    </>
  );
}

export default Guess;
