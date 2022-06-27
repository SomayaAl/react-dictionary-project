import React from "react";
import Synonyms from "./Synonyms.js";

export default function Meanings(props) {
  return (
    <div className="Meanings">
        <h3 className="speech-part">{props.meaning.partOfSpeech}</h3>
        {props.meaning.definitions.map(function (definition, index) {
          return (
            <div key={index}>
              <div className="definitions">{definition.definition}</div>
              <div className="examples">{definition.example}</div>
              <Synonyms synonyms={definition.synonyms} />
            </div>
          );
        })}
    </div>
  );
}
