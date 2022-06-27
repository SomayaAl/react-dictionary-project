import axios from "axios";
import React, { useState } from "react";
import "./App.css";
import Results from "./Results.js";

export default function Dictionary(props) {
  let [word, setWord] = useState(props.defaultWord);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    axios.get(apiUrl).then(handleResponse);
  }


  function handleSubmit(event) {
      event.preventDefault();
      search();
  }

  function handleWordChange(event) {
    setWord(event.target.value);
  }

  function load() {
      setLoaded(true);
      search();
  }

  if (loaded) {
  return (
    <div className="Dictionary">
      <div className="form-section">
        <h3>What word would you like to look up?</h3>
        <form onSubmit={handleSubmit}>
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
} else {
    load()
    return "Loading..."
}
}