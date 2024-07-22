import React from "react";

function Guess({ guess }) {
  return (
    <>
      {guess.split("").map((letter, index) => (
        <span className="cell" key={index}>
          {letter}
        </span>
      ))}
    </>
  );
}

export default Guess;
