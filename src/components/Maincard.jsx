import React from "react";

function Maincard(Props) {
  return (
    <div className="flexbox-item">
    <form action="">
      <div className="card main-card">
        <h1>Are you an introvert or and extrovert?</h1>
        <h3> {Props.question}</h3>
      </div>
      <div className="btn-p">
        <input className="btn" type="submit" Value="Next >" />
      </div>
    </form>
    </div>
  );
}

export default Maincard;
