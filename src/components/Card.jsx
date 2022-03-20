import React from "react";

function Card(Props) {
  return (
    <div className="container">
      <div className="card">
        <p>{Props.answer1}</p>
      </div>
      <div className="card">
        <p>{Props.answer2}</p>
      </div>
      <div className="card">
        <p>{Props.answer3}</p>
      </div>
      <div className="card">
        <p>{Props.answer4}</p>
      </div>
    </div>
  );
}

export default Card;
