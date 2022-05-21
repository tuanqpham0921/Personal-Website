import React from 'react';
import './About.css'
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from "react-icons/ai";
import Link from 'react-scroll/modules/components/Link';
import Fader from '../Fader';

function About() {
  return (
    <body>
      {/* <h1 style={{font: "normal normal bold cormorantgaramond-semibold,cormorantgaramond,'cormorant garamond',serif", letterSpacing: "0em", fontSize: "3em"}}>  
        Tuan Pham</h1> */}

      <h1 style={{font: "normal normal bold cormorantgaramond-semibold,cormorantgaramond,'cormorant garamond',serif", 
                  letterSpacing: "0em", fontSize: "3em", marginTop: "-40px"}}>  
      <Fader text="Tuan Pham" time="750"></Fader> </h1>

      <div class='bio'>
        <Fader text="Hello! I am a recent graduate from UT Austin with a degree in CS and Economics. I created this website to help you get to know me better. 
           I'm planning to add more about my experiences, courses I took, music, movies, and food that I like."
               time="900"></Fader> 
        <Fader text="Feel free to reach out if you have similar interests, backgrounds, or just want to connect!"
               time="1100"></Fader> 
      </div>

      <hr style={{margin: "2vw", marginLeft: "0", marginBottom: "1vh"}}/>

        <div class="holder">
            <div class="image">
                <img src="headshot.jpg" alt="Headshot" />
            </div>
            <div class="text">
                <div style={{display: "flex", marginTop: "-15px"}}><p><strong>Email </strong></p><Fader text='tuanqpham0921@gmail.com' time="1300"></Fader></div>
                <div style={{display: "flex", marginTop: "-15px"}}><p><strong>Phone </strong></p><Fader text='512-971-8538' time="1400"></Fader></div>
                <div style={{display: "flex", marginTop: "-15px", marginBottom: "-15px"}}><p><strong>Address </strong></p><Fader text='Austin, TX' time="1500"></Fader></div>
                
                <p>
                <a href="https://www.linkedin.com/in/tuanqpham0921/" style={{color: "black"}}>
                  LinkedIn</a>
                &nbsp; 
                •
                &nbsp; 
                <a href="https://github.com/tuanqpham0921" style={{color: "black"}}>
                  GitHub</a>
                &nbsp; 
                •
                &nbsp; 
                <a href="https://www.tuanqpham0921.com/_files/ugd/98eae2_955235f2d47c403698b1e540792b9c23.pdf" style={{color: "black"}}>
                  Resume</a>
                </p>
            </div>
            
        </div>
    </body>
  );
}

export default About;