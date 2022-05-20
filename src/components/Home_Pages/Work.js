import React from 'react';
import './Work.css';

function Work() {
  return (
    <body>
      <h1 style={{textAlign: "left", marginLeft: "20vw", font: "normal normal bold 22px/1.4em cormorantgaramond-semibold,cormorantgaramond,'cormorant garamond',serif", letterSpacing: "0em", fontSize: "3em"}}>
        E X P R I E N C E</h1>
      <hr style={{textAlign: "left", margin: "2vw", marginLeft: "20vw", marginRight: "30vw"}}/>
      <div class="holder-work">
        <div class="text-work">
          <p><strong>June 2019 - August 2019</strong><br/> 
          <a href="https://www.osamcquillan.ie/" style={{color: "black"}}>
            <strong>OSA McQuillian</strong><br/> 
          </a> 
            Accountant Internship <br />
            <i>Dublin, Ireland</i></p>
          
          <p><strong>October 2018 - June 2019</strong> <br/> 
          <a href="https://www.utsa.edu/studentunion/" style={{color: "black"}}>
              <strong>The University of Texas</strong> <br/> 
          </a>
            Program Assistant <br/> 
            <i>San Antonio, Texas</i></p>
          
          <p><strong>August 2017 - June 2018</strong> <br/>
          <a href="https://www.yelp.com/biz/hula-poke-san-antonio-4/" style={{color: "black"}}>
              <strong>Hula Poke</strong> <br/>
          </a>
            Server <br/>
            <i>San Antonio, Texas</i></p>
        </div>

        <div class="video" >
          <video autoPlay loop muted>
            <source src="work.mp4" type="video/mp4" />
          </video>
        </div>

      </div>
    </body>
  );
}

export default Work;