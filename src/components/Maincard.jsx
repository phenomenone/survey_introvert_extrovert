import React from "react";

function Maincard(Props) {
  return (
    <div className="flexbox-item">
      <form action="">
        <div className="card">
          <h1>Are you an introvert or and extrovert?</h1>
          <h3> {Props.question}</h3>
        </div>
        <div className="btn-p">
          <input className="btn" type="submit" value="Next >" />
        </div>
        <p className="page-count">{Props.id} of 6</p>
      </form>
    </div>
  );
}

export default Maincard;
