import React from "react";

export default function Title() {
  const letters = ["L", "I", "G", "H", "T", "N", "E", "S", "S"];

  return (
    <div className="title-container">
      <div className="overlay"></div>
      <div className="text">
        {letters.map((letter, index) => (
          <div key={index} className="wrapper">
            <div className="letter">{letter}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
