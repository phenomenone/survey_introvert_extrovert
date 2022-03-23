import React, { useState} from "react";
import questions from "../questions";

function Card(Props) {

  const [isSelected, setIsSelected] = useState(false);

  console.log(isSelected);

  return (
    <div className="flexbox-item">
      <p id="checkbox-button">
        <label><input onClick={()=> setIsSelected(true)} type="radio" name="answer" value="A" /><span className="glow">{questions[Props.id].answer1}</span></label>
        <label><input onClick={((e) => {console.log(e.target.value); })} type="radio" name="answer" value="B" /><span className="glow">{questions[Props.id].answer2}</span></label>
        <label><input onClick={((e) => {console.log(e.target.value); })} type="radio" name="answer" value="C" /><span className="glow">{questions[Props.id].answer3}</span></label>
        <label><input onClick={((e) => {console.log(e.target.value); })} type="radio" name="answer" value="D" /><span className="glow">{questions[Props.id].answer4}</span></label>
      </p>
    </div>
  );
}

export default Card;
