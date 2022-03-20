import React from "react";
// import Header from "./Header";
import Footer from "./Footer";
import Card from "./Card";
import data from "../data";

function App() {
  console.log(data);
  return (
    <div>
      {/* <Header /> */}
      <div className="flex-container">
        <div className="container">
        <Card 
          answer={data[0].question}
        />
        </div>
        <div className="container">
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
      </div>

      <Footer />
    </div>
  );
}

export default App;
