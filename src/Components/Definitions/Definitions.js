import React from "react";
import "./Definitions.css";

const Definitions = ({ word, meanings, category }) => {
  return (
    <div className="Meanings">
      {word === "" ? (
        <span className="Subtitle">Start by typing a word in Search</span>
      ) : (
        meanings.map((mean) => mean.meanings.map((item) => console.log(item)))
      )}
    </div>
  );
};

export default Definitions;
