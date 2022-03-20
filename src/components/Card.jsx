import React from "react";

function Card(Props) {
  return (
      <div className="card">
        <p>{Props.answer}</p>
      </div>
  );
}

export default Card;
