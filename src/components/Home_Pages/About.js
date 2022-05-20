import React from 'react';
import './About.css'
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from "react-icons/ai";
import Link from 'react-scroll/modules/components/Link';

function About() {
  return (
    <body>
      <h1 style={{font: "normal normal bold cormorantgaramond-semibold,cormorantgaramond,'cormorant garamond',serif", letterSpacing: "0em", fontSize: "3em"}}>  Tuan Pham</h1>
      <div class='bio'>
        <p> Hello! I am a student at the University of Texas at Austin. I created this website to help you get to know me better. I'm planning to add more about my experiences, courses I took, music, movies, and food that I like. </p>       
        <p>Feel free to reach out if you have similar interests, backgrounds, or just want to connect!</p>
      </div>
      <hr style={{margin: "2vw", marginLeft: "0", marginBottom: "1vh"}}/>

        <div class="holder">
            <div class="image">
                <img src="headshot.jpg" alt="Headshot" />
            </div>
            <div class="text">
                <p><strong>Email </strong>tuanqpham0921@gmail.com</p>
                <p><strong>Phone </strong>512-971-8538</p>
                <p><strong>Address </strong>Austin, TX</p>
                
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