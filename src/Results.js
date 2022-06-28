import React from "react";
import Meanings from "./Meanings.js";
import Phonetics from "./Phonetics.js";

export default function Results(props) {
  if (props.results) {
    return (
      <div>
        <div className="word-section">
          <div className="Results">
            <h2>
              <strong>{props.results.word}</strong>
            </h2>
            {props.results.phonetics.map(function (phonetic, index) {
              return (
                <div key={index}>
                  <Phonetics phonetic={phonetic} />
                </div>
              );
            })}
          </div>
        </div>
        <div className="meanings-section">
          {props.results.meanings.map(function (meaning, index) {
            return (
              <div key={index}>
                {" "}
                <Meanings meaning={meaning} />{" "}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
