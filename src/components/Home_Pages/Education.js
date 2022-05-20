import React from 'react';
import './Education.css';


function Education() {
  return (
    <body>
      <h1 style={{textAlign: "left", font: "normal normal bold 22px/1.4em cormorantgaramond-semibold,cormorantgaramond,'cormorant garamond',serif", letterSpacing: "0em", fontSize: "3em"}}>
        E D U C A T I O N</h1>
      <hr style={{textAlign: "left", margin: "2vw", marginLeft: "0", marginRight: "4vw"}}/>
      <div class="holder-education">
        <div class="text-education">
          <p><strong>2019 - 2022</strong><br/>
              <strong>The University of Texas at Austin </strong>
              <br/><br/>
              <i>Bachelor of Science</i>, Computer Science 
              <br/>
              <i>Bachelor of Arts</i>, Economics and Mathematics</p>
        </div>
        <div class="video" >
          <video autoPlay loop muted>
            <source src="UT.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </body>

    
  );
}

export default Education;