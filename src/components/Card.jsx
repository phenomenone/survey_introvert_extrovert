import React from "react";
import questions from "../questions";

function Card(Props) {
 

  let onOnclickHandler = (e) => {
    console.log(e.target.value); 
  };

  return (
    <div className="flexbox-item">
      <p id="checkbox-button">
        <label><input onClick={onOnclickHandler} type="radio" name="answer" value="1" /><span className="glow">{questions[Props.id].answer1}</span></label>
        <label><input onClick={onOnclickHandler} type="radio" name="answer" value="2" /><span className="glow">{questions[Props.id].answer2}</span></label>
        <label><input onClick={onOnclickHandler} type="radio" name="answer" value="3" /><span className="glow">{questions[Props.id].answer3}</span></label>
        <label><input onClick={onOnclickHandler} type="radio" name="answer" value="4" /><span className="glow">{questions[Props.id].answer4}</span></label>
      </p>
    </div>
  );
}

export default Card;
