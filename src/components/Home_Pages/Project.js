import React from 'react';
import './Project.css';
// import Cards from '../Project_Pages/Cards';
// import CardItem from '../Project_Pages/CardItem';
import Link from 'react-scroll/modules/components/Link';

function Project() {
  return (

    <body>
      <h1 style={{textAlign: "left", marginTop: "15vh", font: "normal normal bold 22px/1.4em cormorantgaramond-semibold,cormorantgaramond,'cormorant garamond',serif", letterSpacing: "0em", fontSize: "3em"}}> 
          P R O J E C T S </h1>
      <hr style={{margin: "2vw", marginLeft: "0"}}/>

      <div class="text-project">
        <p><strong>MusicMuse</strong><br />
        developed a website to store dynamic music databases using API, HTML, CSS, JavaScript, Flask, Python, and SQL. 
        Project code is available on GitLab​​ </p>
        
        <p><strong>Taxi Sorting</strong><br />
        implemented a sort algorithm to rank a large taxi data record with multiple cloud machines using Java, Google Cloud, and Hadoop MapReduce </p>

        <p><strong>Netflix Prize</strong><br/>
        created feature extractions and machine learning algorithms on the 2009 Netflix Prize competition data to reduce prediction error rate (RMSE) by at least 5% using C++.
        Project code is available on GitLab​​.</p>
      </div>
      <div class="more">
        <a href="/all_projects">
          <video  autoPlay loop muted>
            <source src="turbine_more_kapwing.mp4" type="video/mp4" />
          </video>
        </a>
      </div>
       
    </body>
  );
}

export default Project;