import React from "react";
import questions from "../questions";

function Card(Props) {

  return (
    <div className="flexbox-item">
      <button type="button" className="answer-button-card" active="true">
      {questions[Props.id].answer1}
      </button>
      <button className="answer-button-card" active="true">
      {questions[Props.id].answer2}
      </button>
      <button className="answer-button-card" active="true">
      {questions[Props.id].answer3}
      </button>
      <button className="answer-button-card" active="true">
      {questions[Props.id].answer4}
      </button>
    </div>
  );
}

export default Card;
