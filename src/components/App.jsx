import React from "react";
// import Header from "./Header";
import Footer from "./Footer";
import Card from "./Card";
import data from "../data";

function App() {
  console.log(data);
  return (
    <div className="flexbox-container">

        <div className="flexbox-item">
          <div className="card main-card">
            <h1>Are you an introvert or and extrovert?</h1>     
            <h3> {data[0].question}</h3>
         </div>
        </div>
        <div className="flexbox-item">
        <Card
        
          answer={data[0].answer1}
        />
        <Card
          answer={data[0].answer2}
        />
        <Card
          answer={data[0].answer3}
        />
        <Card
          answer={data[0].answer4}
        />

      </div>

      <Footer />
    </div>
  );
}

export default App;
