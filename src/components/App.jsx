import React, { Fragment, useState, useRef } from "react";
// import Header from "./Header";
import Footer from "./Footer";
import Card from "./Card";
import questions from "../questions";
import Maincard from "./Maincard";

function App() {
  const [isSelected, setIsSelected] = useState(false);

  const [count, setCount ] = useState(0);

  console.log(count);
  return (
    <Fragment>
      <form>
        <div className="flexbox-container">
            <div className="flexbox-item">
              <div className="card">
                <h1>Are you an introvert or and extrovert?</h1>
                <h3> {questions[count].question}</h3>
              </div>
              <div className="btn-p">
                { isSelected 
                  ? <input onClick={() => {setCount(count + 1); }} className={isSelected ? "btn" : "btn-hide"} type="button" value="Next >" /> 
                  : <input onClick={() => {alert("Please, select and option first.")}} className={isSelected ? "btn" : "btn-hide"} type="submit" value="Next >" />
                }
                  
              </div>
              <p className="page-count">{questions[count].id} of 6</p> 
            </div>
            <div className="flexbox-item">
              <div id="checkbox-button">
                <label><input onClick={()=> setIsSelected(true)} type="radio" name="answer" value="A" /><span className="glow">{questions[count].answer1}</span></label>
                <label><input onClick={()=> setIsSelected(true)} type="radio" name="answer" value="B" /><span className="glow">{questions[count].answer2}</span></label>
                <label><input onClick={()=> setIsSelected(true)} type="radio" name="answer" value="C" /><span className="glow">{questions[count].answer3}</span></label>
                <label><input onClick={()=> setIsSelected(true)} type="radio" name="answer" value="D" /><span className="glow">{questions[count].answer4}</span></label>
              </div>
            </div>
        </div>
      </form>
      <Footer /> 
    </Fragment>
  );
}

export default App;
