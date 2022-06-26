import React, { useState } from "react";
import "./App.css";

export default function Dictionary() {
  let [word, setWord] = useState("");

  function search(event) {
    event.preventDefault();
    alert(`${word}`);
  }

  function handleWordChange(event) {
    setWord(event.target.value);
  }

  return (
    <div className="Dictionary">
    <div className="form-section">
        <h3>What word would you like to look up?</h3>
      <form onSubmit={search}>
            <input
              className="form-control"
              type="search"
              placeholder="Enter a word"
              autoFocus="on"
              autoComplete="off"
              onChange={handleWordChange}
            />
      </form>
      </div>
    </div>
  );
}
