import React, { Fragment, useState } from "react";
// import Header from "./Header";
import Footer from "./Footer";
import questions from "../questions";

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
                <p className="page-count">{questions[count].id} of 6</p> 
              </div>
              <div className="btn-p">
                { isSelected 
                  ? <input className={isSelected ? "btn" : "btn-hide"} type="reset" value=" Next >" onClick={() => {setCount(count + 1); setIsSelected(false)}}/> 
                  : <input className={isSelected ? "btn" : "btn-hide"} type="reset" value=" Next >" />
                }
              </div>
              
            </div>
            <div className="flexbox-item">
              <div id="checkbox-button">
                <label><input onClick={()=> setIsSelected(true)} type="radio" name="answer" value="A" /><span>{questions[count].answer1}</span></label>
                <label><input onClick={()=> setIsSelected(true)} type="radio" name="answer" value="B" /><span>{questions[count].answer2}</span></label>
                <label><input onClick={()=> setIsSelected(true)} type="radio" name="answer" value="C" /><span>{questions[count].answer3}</span></label>
                <label><input onClick={()=> setIsSelected(true)} type="radio" name="answer" value="D" /><span>{questions[count].answer4}</span></label>
              </div>
            </div>
        </div>
      </form>
      <Footer /> 
    </Fragment>
  );
}

export default App;
