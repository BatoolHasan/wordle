import React from "react";

function Banner({ state, numOfGuesses, answer }) {
  const bannerText =
    state === "happy" ? (
      <p>
        <strong>Congratulations!</strong> Got it in
        <strong> {numOfGuesses} guesses</strong>.
      </p>
    ) : (
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>.
      </p>
    );
  return <div className={`${state} banner`}>{bannerText}</div>;
}

export default Banner;
