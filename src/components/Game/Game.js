import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import InputBar from "../inputBar";
import Guesses from "../Guesses";
import Banner from "../Banner";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { checkGuess } from "../../game-helpers";

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
  const [showBanner, setShowBanner] = React.useState(false);
  const handleSubmit = (event) => {
    const isCorrect = checkGuess(input, answer).every(
      (letter) => letter.status === "correct"
    );
    if (counter + 1 === NUM_OF_GUESSES_ALLOWED || isCorrect) {
      setShowBanner(true);
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
      {showBanner && (
        <Banner
          numOfGuesses={counter}
          answer={answer}
          state={guesses.includes(answer) ? "happy" : "sad"}
        />
      )}
      <Guesses guesses={guesses} answer={answer} />
      <InputBar
        input={input}
        handleSubmit={handleSubmit}
        onChange={onChange}
        isDisabled={showBanner}
      />
    </>
  );
}

export default Game;
