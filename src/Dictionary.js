import axios from "axios";
import React, { useState } from "react";
import "./App.css";
import Results from "./Results.js";

export default function Dictionary() {
  let [word, setWord] = useState("");
  let [results, setResults] = useState(null);

  function search(event) {
    event.preventDefault();

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleResponse(response) {
    setResults(response.data[0]);
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
      <Results results={results} />
    </div>
  );
}
