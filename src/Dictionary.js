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
      <form onSubmit={search}>
        <div className="row">
          <div className="col-5">
            <input
              className="form-control"
              type="search"
              placeholder="Enter a word"
              autoFocus="on"
              autoComplete="off"
              onChange={handleWordChange}
            />
          </div>
          <div className="col-4">
            {" "}
            <input className="btn btn-primary" type="submit" text="Search" />
          </div>
        </div>
      </form>
    </div>
  );
}
