import React from 'react';
import './Interests.css';


function Interests() {
  return (
    <body>
        <h1 style={{textAlign: "left", font: "normal normal bold 22px/1.4em cormorantgaramond-semibold,cormorantgaramond,'cormorant garamond',serif", letterSpacing: "0em", fontSize: "2.3em"}}>
          I N T E R E S T S </h1>
        
        <div class="holder-interests">
          <div class="text-interests">
          <hr style={{marginTop: "-20px"}}/>
            <p> In my free time, I like to run or hike outside. The coolest place I have hiked is &nbsp; 
               <a href="https://en.wikipedia.org/wiki/Carrauntoohil" style={{color: "black"}}>
                 Carrauntoohil, Ireland
                </a>.
              <br/>
                <br/>
                In addition, I also like to read new books. Some of my favorite books are &nbsp; 
                
                <a href="https://www.amazon.com/Factfulness-Reasons-World-Things-Better/dp/1250107814" style={{color: "black"}}>
                  <i>Factfulness</i> by Hans Rosling </a>
                
                &nbsp; 
                and 
                &nbsp; 

                <a href="https://www.amazon.com/1984-George-Orwell/dp/B08T49SJZT/ref=sr_1_1_sspa?crid=KBLJVMN3IYTW&keywords=1984&qid=1653081483&s=books&sprefix=1984%2Cstripbooks%2C116&sr=1-1-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUExM1lQSzRXT1NYT0ZSJmVuY3J5cHRlZElkPUEwMTE1Mzc3MUJLSjJHSzZIMjFNMyZlbmNyeXB0ZWRBZElkPUEwOTE0OTA0MlJLM1I1Rk9DQlowSiZ3aWRnZXROYW1lPXNwX2F0ZiZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU=" style={{color: "black"}}>
                  <i>1984 </i> by George Orwell</a>
                . <br/>
                {/* <br/>
                Click &nbsp;
                
                <a href="/more_interests" style={{color: "black"}}>
                  here
                </a>
                
                &nbsp; to find out more about me! */}
            </p>
          </div>
          <div class="video" >
            <video autoPlay loop muted>
              <source src="reading.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
    </body>
  );
}

export default Interests;