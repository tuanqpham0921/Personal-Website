import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <div className='cards__container'>
        <div className='cards__wrapper'>

          <h1> Software Development</h1>
          {/* First Row */}
          <ul className='cards__items'>
            <CardItem
              src='PersonalWeb.png'
              title='Personal Website'
              text='check out how I made this website on GitHub!'
              tech='React, JavaScript, HTML, and CSS'
              label='Website'
              path='null'
              git='https://github.com/tuanqpham0921/Personal-Website'/>
            <CardItem
              src='music.jpg'
              title='MusicMuse'
              text='developed a website to store dynamic music databases. Learned frontend and backend development.'
              tech='API, HTML, CSS, JavaScript, Flask, Python, Node.js, and SQL'
              label='Website'
              path='null'
              git='https://gitlab.com/kev.guo123/cs373-idb'/>
          </ul>
          <br /><br />

          {/* Third Row */}
          <h1> Systems and Data Structures</h1>
          <ul className='cards__items'>
            <CardItem
              src='Gpu.jpg'
              title='GPU Emulator'
              text='created an emulator to demonstrate the differences between parallel
              CPU and GPU performance. Learned many operating systems subjects
              by building the kernel.'
              tech='C++ and Docker'
              label='Operating Systems'
              path='null'
              git='https://gitlab.com/tuanqpham0921/local-final-os'/>
            <CardItem
              src='malloc.jpg'
              title='Memmory Manangement'
              text='built a dynamic storage allocator for C with the implementation of malloc 
              that ensures the heap management is efficient and correct. Learn how to use pointers 
              and performance coding.'
              tech='Language: C'
              label='Architecture'
              path='null'
              git='https://github.com/tuanqpham0921/Memory-Management' />
            <CardItem
              src='Huffman.jpg'
              title='HuffMan Compression'
              text='using the popular HuffMan Compression algorithm to decrease the
              size for file transfers. Learned how to use trees data structure and file systems.'
              tech='Language: Java'
              label='Data Structure'
              path='/musicmuse'/>
          </ul>
          <br /><br />

          <h1> Machine Learning</h1>
          <ul className='cards__items'>
            <CardItem
              src='pseudocode.jpg'
              title='Pseudo Code To C++'
              text="created a machine learning model that can translate pseudo code to C++ hoping
              to help programmers that can't type. The model achieved accuracy around 80%."
              tech='HuggingFace, PyTorch, TensorFlow'
              label='NLP (Demo Available)'
              path='/pseudo2cpp'/>
            <CardItem
              src='vietnamesedia.png'
              title='Vietnamese Diacritics Restoration'
              text='made a model to accurately restore Vietnamese diacritics using context 
              hoping to increase writing and reading speed for Vietnamese elders.
              Model achieved around an 86% accurarcy'
              tech='HuggingFace, PyTorch, TensorFlow'
              label='NLP (Demo Available)'
              path='/products'/>
            <CardItem
              src='readingcomp.jpeg'
              title='Reading Comprehension'
              text='using a recurrent neural networks model to understand text and answer
              questions to increase reading speed. Model achieved around 40% question answering accuracy.'
              tech='PyTorch and Google Cloud'
              label='Neural Networks (Demo Available)'
              path='null'/>
          </ul>
          <br /><br />

          {/* Fourth Row */}
          <h1> Data Analytics </h1>
          <ul className='cards__items'>
            <CardItem
              src='taxisorting.jpg'
              title='Taxi Sorting'
              text=' implemented a multi sockets sort algorithm to efficently sort a large taxi data record with multiple cloud machine.'
              tech='Java, Google Cloud, and Hadoop MapReduce'
              label='Cloud Computing / Data Analytics'
              path='/services'/>
            <CardItem
              src='unicornstartup.png'
              title='Unicorn StartUp Evaluation'
              text='used data cleaning techniques to help predict future start-up evaluations with the same attributes.
              Learned how to data clean and used prediction algorithms on real life dataset.'
              tech='Jypyter Notebook, SkitLearn, and Pandas.'
              label='Data Mining'
              path='/products'/>
            <CardItem
              src='unemployment.jpg'
              title='The Effect of Minimum Wage on Unemployment'
              text='researched and analyzed the contributing factors to unemployment rate
              and the minimum wage in the United States since 1975 using statistical methods on quantitative data'
              label='Research Paper'
              path='paper'
              git='https://www.tuanqpham0921.com/_files/ugd/98eae2_d1b2b1350b4540dba33bf21b45f5bc00.pdf'/>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;