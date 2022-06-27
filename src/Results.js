import React from "react";
import Meanings from "./Meanings.js";

export default function Results(props) {
  if (props.results) {
    return (
      <div>
        <div className="word-section">
          <div className="Results">
            <h2>{props.results.word}</h2>
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
