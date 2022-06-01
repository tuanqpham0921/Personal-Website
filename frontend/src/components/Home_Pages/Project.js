import React from 'react';
import './Project.css';

function Project() {
  return (

    <body>
      <h1 style={{textAlign: "left", marginTop: "15vh", font: "normal normal bold 22px/1.4em cormorantgaramond-semibold,cormorantgaramond,'cormorant garamond',serif", letterSpacing: "0em", fontSize: "2.3em"}}> 
          P R O J E C T S </h1>
      <hr style={{margin: "2vw", marginLeft: "0"}}/>

      <div class="text-project">
        <p><strong>MusicMuse: </strong><i>JavaScript, HTML, CSS, Flask, Python, Docker, and SQL</i><br />
        developed a dynamic website to store music databases. Contributed as a full-stack engineer. 
        Learned frontend and backend software development in a team of five. &nbsp; 
        <a href="https://gitlab.com/kev.guo123/cs373-idb" style={{color: "black"}}>
                  GitLab</a></p>
        
        <p><strong>Pseudo Code to C++ Translator: </strong><i>PyTorch, Google Colab, and HuggingFace</i><br />
        created a machine learning model that translates pseudo code to C++ to save time or help disabled programmers. 
        The model achieved an accuracy of around 76%. &nbsp; 
        <a href="https://colab.research.google.com/drive/1TVuvG0gCWD-CgkhOzX7hBGMqHejtQFtv?usp=sharing" style={{color: "black"}}>
                  Notebook</a></p>

        <p><strong>GPU Emulator: </strong><i>C++, CUDA</i><br/>
        built an emulator to demonstrate the differences between CPU and GPU performance. Worked as a project leader. 
        Learned multithreading, file systems, and synchronization primitives. &nbsp; 
        <a href="https://gitlab.com/tuanqpham0921/local-final-os" style={{color: "black"}}>
                  GitLab</a></p>
      
        <p><strong>Taxi Sorting: </strong><i>Java, Hadoop MapReduce, and Google Cloud Platform</i><br/>
        programmed a multi-machines sorting algorithm on a large taxi dataset. Contributed multiple designs to a team of four. 
        Learned virtual machine networking and optimizations on large datasets. </p>
      </div>
      <div class="more">
        <a href="/more_projects">
          <video  autoPlay loop muted>
            <source src="turbine_more_kapwing.mp4" type="video/mp4" />
          </video>
        </a>
      </div>
       
    </body>
  );
}

export default Project;