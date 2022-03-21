import React from "react";
// import Header from "./Header";
import Footer from "./Footer";
import Card from "./Card";
import questions from "../questions";
import Maincard from "./Maincard";

function App() {

  let questionNumber = 0;

  return (
    <div>
      <div className="flexbox-container">
          <Maincard question={questions[questionNumber].question} />
          <Card id={questions[questionNumber].id}/>
      </div>

    <Footer />
    </div>
    
  )
}

export default App;
