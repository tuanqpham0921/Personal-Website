import React from 'react';

import About from './Home_Pages/About';
import Education from './Home_Pages/Education';
import Work from './Home_Pages/Work';
import Project from './Home_Pages/Project';
import Interests from './Home_Pages/Interests';
import Final from './Home_Pages/Final';
import './Home.css'

import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, Move, MoveIn, MoveOut, Sticky, StickyIn, ZoomIn } from "react-scroll-motion";
const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn(), MoveOut(0, -200));
const FadeUp = batch(Fade(), Move(), Sticky(), MoveOut(0, -200));

function Home() {
  return (
    <ScrollContainer>
      <ScrollPage page={0}>
        <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -1000))}>  
          <About />
        </Animator>
      </ScrollPage>

      <ScrollPage page={1}>
        <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -1000))}>  
        </Animator>
      </ScrollPage>

      <ScrollPage page={2}>
        <div className='section-color'>
          <Animator animation={FadeUp}>
            <Education />
          </Animator>
        </div>
      </ScrollPage>

      <ScrollPage page={3}>
          <Animator animation={ZoomInScrollOut}>
          </Animator>
      </ScrollPage>

      <ScrollPage page={4}>
          <Animator animation={ZoomInScrollOut}>
            <Work />
          </Animator>
      </ScrollPage>

      <ScrollPage page={5}>
          <Animator animation={ZoomInScrollOut}>
          </Animator>
      </ScrollPage>

      <ScrollPage page={6}>
        <Animator animation={ZoomInScrollOut}>

        <body>
          <h1 style={{textAlign: "left", marginLeft: '30px', font: "normal normal bold 22px/1.4em cormorantgaramond-semibold,cormorantgaramond,'cormorant garamond',serif", letterSpacing: "0em", fontSize: "1.5em"}}> 
            C A R E E R</h1>
          <hr style={{textAlign: "left", marginLeft: '30px', marginBottom: '-30px'}}/>
          <div className='holder-home'>
            <div class="text-home">
            
              <p>Being a recent graduate, I have curiosity for many roles. However I'm very
              interested in Full-Stack Engineering, Machine Learning, and Business Manangement.</p>
              
              <p>In college, I tried to learn as many different subjects as possible, 
              but still concentrate on improving the world through technology mindset. I'm a very hard
              working and self-driven individual. I hope that we can connect and work together!</p>
                
            </div>
          </div>
        </body>
          
        <body>
          <h1 style={{textAlign: "left", marginLeft: '30px', marginTop: '0px', font: "normal normal bold 22px/1.4em cormorantgaramond-semibold,cormorantgaramond,'cormorant garamond',serif", letterSpacing: "0em", fontSize: "1.5em"}}> 
            S K I L L S</h1>
          <hr style={{textAlign: "left", marginLeft: '30px', marginBottom: "-30px", marginTop: "-15px"}}/>
          <div className='holder-home'>
            <div class="text-home">
              <p><i>Languages</i></p>
              <ul>
                <li>Python, Java</li>
                <li>C, C++</li>
                <li>JavaScript</li>
                <li>HTML, CSS</li>
              </ul>  
            </div>

            <div class="text-home">
              <p> <i>Machine Learning</i></p>
              <ul>
                <li>PyTorch, TensorFlow</li>
                <li>PyTorch Lighting, R</li>
                <li>HuggingFace</li>
                <li>Scikit-Learn</li>
              </ul>  
            </div>

            <div class="text-home">
              <p><i>Other Tools</i></p>
              <ul>
                <li>Google Cloud, AWS</li>
                <li>React, Flask</li>
                <li>MySQL, PostgreSQL</li>
                <li>mongoDB, Cassandra</li>
                <li>Excel, SageOne</li>
              </ul>  
            </div>
          </div>
        </body>

        </Animator>
      </ScrollPage>

      <ScrollPage page={7}>
          <Animator animation={ZoomInScrollOut}>
          </Animator>
      </ScrollPage>

      <ScrollPage page={8}>
        <div className='section-color'>
          <Animator animation={ZoomInScrollOut}>
            <Project />
          </Animator>
        </div>
      </ScrollPage>

      <ScrollPage page={9}>
        <div className='section-color'>
          <Animator animation={ZoomInScrollOut}>
          </Animator>
        </div>
      </ScrollPage>

      <ScrollPage page={10}>
        <Animator animation={ZoomInScrollOut}>
          <Interests />
        </Animator>
      </ScrollPage>

      <ScrollPage page={11}>
          <Animator animation={ZoomInScrollOut}>
          </Animator>
      </ScrollPage>

      <ScrollPage page={12}>
        <Animator animation={batch(Fade(), Sticky())}>
          <Final />
        </Animator>
      </ScrollPage>
    </ScrollContainer>
  )
};

export default Home;