import React from "react";

function InputBar({ input, onChange, handleSubmit, isDisabled }) {
  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        pattern="^[A-Za-z]{5}$"
        id="guess-input"
        type="text"
        value={input}
        onChange={onChange}
        disabled={isDisabled}
      />
    </form>
  );
}

export default InputBar;
