import React, { useState, useEffect } from 'react'
import './VietDia.css'
import Navbar from './index';
import { AiFillGithub } from "react-icons/ai";


function Pseudo2Cpp() {
    const [data,setData] = useState([{}])
    const [answer,setAnswer] = useState([{}])
    const [print,setPrint]=useState(false)

    function getAnswer()
    {
        fetch("/_get_cpp", {
            method: 'POST',
            headers:{
                "Content_Type":"application/json",
            },
            body: JSON.stringify({user_input: data})
        }).then(
            res => res.json()
        ).then(
            answer => {
                setAnswer(answer)
                
            },
            console.log(answer),
            setPrint(true)
        )
    }

    function getData(val)
    {
        console.warn(val.target.value)
        setData(val.target.value)
    }

  
    return (
    <>
        <Navbar val="/more_projects" />
        <div>
            <h1>
                Pesudo Code to C++ &nbsp;
                <a
                    href="https://github.com/tuanqpham0921"
                    style={{ color: "black" }}>
                    <AiFillGithub />
                </a>
            </h1>
        </div>    
        
        <div className='pseudobody'>
            <div className="centered">
                <p><strong>Introduction</strong><br/>
                Being able to convert pseudo-code to actual code can be very useful for programmers. 
                In many of my group meetings, we find that spending time and planning out our code is 
                very useful in the long run. It helps reduce bugs and confusion between team members.
                As we plan out the code, we mostly use pseudocode and drawings to make sense of things. 
                Therefore if I had a model that could convert that pseudo-code to actual code, we can have 
                even more time to plan and save a lot of time. <br />
                It can also be very useful to make programming easier for many users. Imagine being able 
                to just speak what’s on your mind and the machine will write the code for you. This feature 
                can help to free your hands for other tasks, or it can be useful for those who are unable to type. <br />
                </p>
                
                <p><strong>Somethings to Consider</strong><br/>
                <ul style={{marginTop: "-1px"}}>
                    <li>This model far from being state of the
                        art and still need a lot more work for everyday use.</li>
                    <li>Model only take up to 50 characters, including spaces.
                        Anything after 50 characters will not be printed out.</li>
                    <li>Please be patient for long text</li>
                </ul></p>

                
            
                <div style={{display: "flex"}}>
                <p><b>Simple examples</b><br /> 
                <ul style={{marginTop: "-1px", marginRight: "100px"}}>
                    <li>read a</li>
                    <li>create string s</li>
                    <li>print k</li>
                </ul></p>
                
                <p><b>Different variables names</b><br />
                <ul style={{marginTop: "-1px", marginRight: "100px"}}>
                    <li>let a, b, c, d, e be integers</li>
                    <li>let a123, b456, c, d, e be booleans</li>
                </ul> </p>
                
                <p><b>Word association examples</b><br />
                <ul style={{marginTop: "-1px"}}>
                    <li>increase y1 by 1000</li>
                    <li>increment y1 by 9.9</li>
                </ul></p>
                </div>
                
                <p style={{marginTop: "-10px"}}><b>Harder examples (may not work too well)</b><br /> 
                <ul style={{marginTop: "-1px"}}>
                    <li>create an array named test with two strings</li>
                    <li>if n {'>'}= 11 and n {'<'}= 19 , print 4 and newline</li>
                    <li>while numberOfInputs {'>'} 0, decrement it and keep looping</li>
                </ul></p>
                
                <textarea rows = "5" cols = "60" type="text" placeholder='Input Pseudo Code Here' defaultValue="make a string x" onChange={getData} />
                <br />
                <button onClick={()=>getAnswer()} >Get C++</button>
                
                {
                print?
                    <h1> {answer.answer}</h1>
                :
                
                <p>Waiting...</p>
                }

            </div>
        </div>
    </>
  )
}

export default Pseudo2Cpp