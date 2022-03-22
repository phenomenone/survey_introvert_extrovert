import React from "react";
import questions from "../questions";

function Card(Props) {

  return (
    <div className="flexbox-item">
      <p id="checkbox-button">
        <label><input type="radio" name="answer" value="1" /><span className="answer-button-card">{questions[Props.id].answer1}</span></label>
        <label><input type="radio" name="answer" value="1" /><span>{questions[Props.id].answer2}</span></label>
        <label><input type="radio" name="answer" value="1" /><span>{questions[Props.id].answer3}</span></label>
        <label><input type="radio" name="answer" value="1" /><span>{questions[Props.id].answer4}</span></label>
      </p>
    </div>
  );
}

export default Card;
