import React from "react";
import Synonyms from "./Synonyms.js";

export default function Meanings(props) {
  return (
    <div className="Meanings">
      <h3>{props.meaning.partOfSpeech}</h3>
      <br />

      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <p>
              <strong> Definition: </strong>
              {definition.definition}
              <br />
              Example: <em>{definition.example}</em>
              <br />
              Synonyms:
              <Synonyms synonyms={definition.synonyms} />
            </p>
          </div>
        );
      })}
    </div>
  );
}
