import React from 'react';



function Maincard(Props){

   return(
      <div className="card main-card">
         <h1>Are you an introvert or and extrovert?</h1>     
         <h3> {Props.question}</h3>
      </div>
      )

}

export default Maincard;