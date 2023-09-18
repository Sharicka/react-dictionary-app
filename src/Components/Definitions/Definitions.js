import React from "react";
import "./Definitions.css";

const Definitions = ({ word, meanings, category }) => {
  return (
    <div className="Meanings">
      {word === "" ? (
        <span className="Subtitle">Start by typing a word in Search</span>
      ) : (
        meanings.map((mean) => console.log(mean))
      )}
    </div>
  );
};

export default Definitions;