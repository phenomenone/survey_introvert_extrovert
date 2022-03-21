import React from "react";
import questions from "../questions";

function Card(Props) {

  return (
    <div className="flexbox-item">
      <div className="card">
        <p>{questions[Props.id].answer1}</p>
      </div>
      <div className="card">
        <p>{questions[Props.id].answer2}</p>
      </div>
      <div className="card">
        <p>{questions[Props.id].answer3}</p>
      </div>
      <div className="card">
        <p>{questions[Props.id].answer4}</p>
      </div>
    </div>
  );
}

export default Card;
