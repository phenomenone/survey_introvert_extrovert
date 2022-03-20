import React from "react";
// import Header from "./Header";
import Footer from "./Footer";
import Card from "./Card";

function App() {
  return (
    <div>
      {/* <Header /> */}
      <Card 
        question="You’re really busy at work and a colleague is telling you their life story and personal woes. You:"
        answer1="A. Don’t dare to interrupt them"
        answer2="B. Think it’s more important to give them some of your time; work can wait"
        answer3="C. Listen, but with only with half an ear"
        answer4="D. Interrupt and explain that you are really busy at the moment"
      />
      <Footer />
    </div>
  );
}

export default App;
