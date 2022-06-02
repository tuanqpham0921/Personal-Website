import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import { Animator, ScrollContainer, ScrollPage, batch, Fade, MoveOut, Sticky, } from "react-scroll-motion";
import Fader from '../Fader'

function Cards() {
  const list =[
    <ul className='cards__items' >
      <CardItem
        src='PersonalWeb.png'
        title='Personal Website'
        text='check out how I made this website on GitHub!'
        tech='React, JavaScript, HTML, Docker, and CSS'
        label='Website (Code Available)'
        // path='https://tuanqpham0921.com'
        path='https://github.com/tuanqpham0921/Personal-Website'
        git='https://github.com/tuanqpham0921/Personal-Website'/>
      <CardItem
        src='music.jpg'
        title='MusicMuse'
        text='developed a dynamic website to store music databases. Contributed as a full-stack engineer. Learned frontend and backend software development in a team of five.'
        tech='JavaScript, HTML, CSS, Flask, Python, Docker, and SQL'
        label='Website (Code Available)'
        // path='null'
        path='https://gitlab.com/kev.guo123/cs373-idb'
        git='https://gitlab.com/kev.guo123/cs373-idb'/>
    </ul>,
  <ul className='cards__items'>
    <CardItem
      src='Gpu.jpg'
      title='GPU Emulator'
      text='built an emulator to demonstrate the differences between CPU and GPU performance.
      Worked as a project leader. Learned multithreading, file systems, and synchronization primitives. '
      tech='C++ and CUDA'
      label='Operating Systems (Code Available)'
      // path='null'
      path='https://gitlab.com/tuanqpham0921/local-final-os'
      git='https://gitlab.com/tuanqpham0921/local-final-os'/>
    <CardItem
      src='malloc.jpg'
      title='Memmory Manangement'
      text='built a dynamic storage allocator for C with the implementation of malloc 
      that ensures the heap management is efficient and correct. Learn how to use pointers 
      and performance coding.'
      tech='Language: C'
      label='Architecture (Code Available)'
      // path='null'
      path='https://github.com/tuanqpham0921/Memory-Management'
      git='https://github.com/tuanqpham0921/Memory-Management' />
    <CardItem
      src='Huffman.jpg'
      title='Huffman Coding'
      text='using the popular Huffman Compression algorithm to decrease the
      size for file transfers. Learned how to use trees data structure and file systems.'
      tech='Language: Java'
      label='Data Structure'
      path=''/>
    </ul>,
  <ul className='cards__items'>
    <CardItem
      src='pseudocode.jpg'
      title='Pseudo Code To C++'
      text="created a machine learning model that can translate pseudo code to C++ hoping
      to help programmers that can't type. The model achieved accuracy around 80%."
      tech='PyTorch, Google Colab, and HuggingFace'
      label='NLP (Notebook Available)'
      // path='/pseudo2cpp'
      path='https://colab.research.google.com/drive/1TVuvG0gCWD-CgkhOzX7hBGMqHejtQFtv?usp=sharing'
      />
    <CardItem
      src='vietnamesedia.png'
      title='Vietnamese Diacritics Restoration'
      text='made a model to accurately restore Vietnamese diacritics using context 
      hoping to increase writing and reading speed for Vietnamese elders.
      Model achieved around an 80% accurarcy'
      tech='HuggingFace, PyTorch, TensorFlow'
      label='NLP'
      path=''/>
    <CardItem
      src='readingcomp.jpeg'
      title='Reading Comprehension'
      text='using a recurrent neural networks model to understand text and answer
      questions to increase reading speed. Model achieved around 40% question answering accuracy.'
      tech='PyTorch and Google Cloud'
      label='Neural Networks'
      path=''/>
    </ul>,
  <ul className='cards__items'>
    <CardItem
      src='taxisorting.jpg'
      title='Taxi Sorting'
      text='programmed a multi-machines sorting algorithm on a large taxi dataset. Contributed multiple designs to a team of four. Learned virtual machine networking and optimizations on large datasets.'
      tech='Java, Google Cloud, and Hadoop MapReduce'
      label='Cloud Computing / Data Analytics'
      path=''/>
    <CardItem
      src='unicornstartup.png'
      title='Unicorn StartUp Evaluation'
      text='used data cleaning techniques to help predict future start-up evaluations with the same attributes.
      Learned how to data clean and used prediction algorithms on real life dataset.'
      tech='Jypyter Notebook, SkitLearn, and Pandas.'
      label='Data Mining'
      git='https://github.com/tuanqpham0921/Unicorn-Startup-Evaluation'
      path='https://github.com/tuanqpham0921/Unicorn-Startup-Evaluation'/>
    <CardItem
      src='unemployment.jpg'
      title='The Effect of Minimum Wage on Unemployment'
      text='researched and analyzed the contributing factors to unemployment rate
      and the minimum wage in the United States since 1975 using statistical methods on quantitative data'
      label='Research Paper Availble'
      // path='paper'
      path='https://www.tuanqpham0921.com/_files/ugd/98eae2_d1b2b1350b4540dba33bf21b45f5bc00.pdf'
      git='https://www.tuanqpham0921.com/_files/ugd/98eae2_d1b2b1350b4540dba33bf21b45f5bc00.pdf'/>
    </ul>
]

  return (
    
    <ScrollContainer>
    <div className='cards'>
      <div className='cards__container'>
        <div className='cards__wrapper'>
        <ScrollPage page={0}>
        <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -5))}>
          <h1 style={{font: "normal normal bold 22px/1.4em cormorantgaramond-semibold,cormorantgaramond,'cormorant garamond',serif", letterSpacing: "0em", fontSize: "2.5em"}}>
            <Fader text="MORE PROJECTS" time="750"/></h1>
          <hr style={{}}/>
          <div class="holder-more-projects">
            <Fader text="
              There are 4 main categories:
              Software Development,
              Systems and Data Structures, Machine Learning, and 
              Data Analytics." time="1000" />
            
            <Fader text="
              Some of them have will have link to GitHub and Demo.
              I will try to document my projects as clearly as possible.
              I hope you will enjoy them as much as I did." time="1250" />
            
            <Fader text="
              Please don't hesitate to email me if there are any issues with 
              the links or just to discuss ideas!" time="1500" />
          </div>
        </Animator> 
      </ScrollPage> 
          <ScrollPage page={1}>
            <Animator animation={batch(Fade(), Sticky(), MoveOut(0, 0))}>
            <h1 style={{font: "normal normal bold 22px/1.4em cormorantgaramond-semibold,cormorantgaramond,'cormorant garamond',serif", letterSpacing: "0em", fontSize: "2.5em"}}>SOFTWARE DEVELOPMENT</h1>
                {list[0]}
            </Animator>
          </ScrollPage>

          <ScrollPage page={2}>
            <Animator animation={batch(Fade(1), Sticky(), MoveOut(0, -1500))}>
            <h1 style={{font: "normal normal bold 22px/1.4em cormorantgaramond-semibold,cormorantgaramond,'cormorant garamond',serif", letterSpacing: "0em", fontSize: "2.5em"}}>SOFTWARE DEVELOPMENT</h1>
              {list[0]}
            </Animator>
          </ScrollPage>

          <ScrollPage page={3}>
            <Animator animation={batch(Fade(), Sticky(), MoveOut(0, 0))}>
            <h1 style={{font: "normal normal bold 22px/1.4em cormorantgaramond-semibold,cormorantgaramond,'cormorant garamond',serif", letterSpacing: "0em", fontSize: "2.5em"}}>SYSTEMS AND DATA STRUCTURES</h1>
              {list[1]}
            </Animator>
          </ScrollPage>

          <ScrollPage page={4}>
            <Animator animation={batch(Fade(1), Sticky(), MoveOut(0, -1500))}>
              <h1 style={{font: "normal normal bold 22px/1.4em cormorantgaramond-semibold,cormorantgaramond,'cormorant garamond',serif", letterSpacing: "0em", fontSize: "2.5em"}}>SYSTEMS AND DATA STRUCTURES</h1>
              {list[1]}
            </Animator>
          </ScrollPage>

          <ScrollPage page={5}>
            <Animator animation={batch(Fade(), Sticky(), MoveOut(0, 0))}>
            <h1 style={{font: "normal normal bold 22px/1.4em cormorantgaramond-semibold,cormorantgaramond,'cormorant garamond',serif", letterSpacing: "0em", fontSize: "2.5em"}}>MACHINE LEARNING</h1>
              {list[2]}
            </Animator>
          </ScrollPage>

          <ScrollPage page={6}>
            <Animator animation={batch(Fade(1), Sticky(), MoveOut(0, -1500))}>
            <h1 style={{font: "normal normal bold 22px/1.4em cormorantgaramond-semibold,cormorantgaramond,'cormorant garamond',serif", letterSpacing: "0em", fontSize: "2.5em"}}>MACHINE LEARNING</h1>
              {list[2]}
            </Animator>
          </ScrollPage>

          <ScrollPage page={7}>
            <Animator animation={batch(Fade(), Sticky(), MoveOut(0, 0))}>
            <h1 style={{font: "normal normal bold 22px/1.4em cormorantgaramond-semibold,cormorantgaramond,'cormorant garamond',serif", letterSpacing: "0em", fontSize: "2.5em"}}>DATA ANALYTICS</h1>
              {list[3]}
            </Animator>
          </ScrollPage>

          <ScrollPage page={8}>
            <Animator animation={batch(Fade(1), Sticky(), MoveOut(0, -1500))}>
            <h1 style={{font: "normal normal bold 22px/1.4em cormorantgaramond-semibold,cormorantgaramond,'cormorant garamond',serif", letterSpacing: "0em", fontSize: "2.5em"}}>DATA ANALYTICS </h1>
              {list[3]}
            </Animator>
          </ScrollPage>

          <ScrollPage page={9}>
        <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -5))}>
        <h1 style={{font: "normal normal bold 22px/1.4em cormorantgaramond-semibold,cormorantgaramond,'cormorant garamond',serif", letterSpacing: "0em", fontSize: "2.5em"}}>
            FAQs</h1>
          <hr style={{}}/>
          <div class="holder-more-projects2">
            <div class="text-more-projects">
              <p>
                <strong>What's your proudest/favorite project?</strong> <br />
                My favorite is Pseudo Code to C++ model.
                I learned how to use Transformers
                and HuggingFace, which is known to be very difficult to work with.
                They're far from state-of-art models, but I had so much fun work on them.
              </p>

              <p>
                <strong>What project would you want to improve? </strong><br />
                I definitely want to improve my Software Development
                skills. In college, I mostly focused on Machine
                Learning or Data Analytics courses. However, having a great
                time making this website from scratch, I want to work on more software development projects.
              </p>

              <p>
                <strong>What lessons have I taken from these projects?</strong> <br />
                As most of these are team projects, I have learned the
                importance of teamwork. Being able to clearly communicate your
                ideas can make such a difference. While not all ideas can be explained
                easily, we have to be patient to try to work on the ideas together. 
                Team work makes the dream work!
              </p>
            </div>
          </div>
        </Animator> 
      </ScrollPage> 
          
        </div>
      </div>
    </div>
    </ScrollContainer>
    
  );
}

export default Cards;