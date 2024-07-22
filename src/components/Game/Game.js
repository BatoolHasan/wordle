import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import InputBar from "../inputBar";
import Guesses from "../Guesses";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [input, setInput] = React.useState("");
  const [guesses, setGuesses] = React.useState(
    Array(NUM_OF_GUESSES_ALLOWED).fill("     ")
  );
  const [counter, setCounter] = React.useState(0);
  const handleSubmit = (event) => {
    if (counter === NUM_OF_GUESSES_ALLOWED) {
      alert(
        "You have reached the maximum number of guesses. The word was " + answer
      );
    }
    event.preventDefault();
    setInput("");
    const nextGuesses = [...guesses];
    nextGuesses[counter] = input;
    setGuesses(nextGuesses);
    setCounter(counter + 1);
  };
  const onChange = (event) => {
    setInput(event.target.value.toUpperCase());
  };
  return (
    <>
      <Guesses guesses={guesses} answer={answer} />
      <InputBar input={input} handleSubmit={handleSubmit} onChange={onChange} />
    </>
  );
}

export default Game;
