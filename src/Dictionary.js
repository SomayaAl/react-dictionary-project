import React, { useState } from "react";
import "./App.css";


export default function Dictionary() {
  const [keyword, setKeyword] = useState("");

  function search(event) {
    event.preventDefault();
    alert({keyword});
  }

  function handleKeywordChange(event) {
      setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input
          type="search"
          placeholder="Enter a word"
          autoFocus={true}
          autoComplete={false}
          onChange={handleKeywordChange}
        />
        <input type="submit" text="Search"/>
      </form>
    </div>
    
  );
}
