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
            <p> In my free time, I like to run or hike outside. The coolest place I have hiked is Carrauntoohil, Ireland.​ <br/>
                <br/>
                In addition, I also like to read new books. Some of my favorite books are Factfulness by Hans Rosling and Range by David Epstein. <br/>
                <br/>
                Click &nbsp;
                
                <a href="/more_interests" style={{color: "black"}}>
                  here
                </a>
                
                &nbsp; to find out more about me!
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