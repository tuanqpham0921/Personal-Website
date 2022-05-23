import React, { useState, useEffect } from 'react'
import './VietDia.css'
import Navbar from './index';
import { AiFillGithub } from "react-icons/ai";


function VietDia() {
    const [data,setData] = useState([{}])
    const [answer,setAnswer] = useState([{}])
    const [print,setPrint]=useState(false)

    function getAnswer()
    {
        fetch("/_get_answer", {
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
        <Navbar val="/more_projects"/>
        <div>
            <h1>
                Vietnamese Diacritics Restoration &nbsp;
                <a
                    href="https://github.com/tuanqpham0921"
                    style={{ color: "black" }}>
                    <AiFillGithub />
                </a>
            </h1>
        </div>    
        
        <div className='vietbody'>
            <div className="centered">
                <p><strong>Introduction</strong><br/>
                Unlike English, the Vietnamese language has
                many options for diacritics when forming a word.
                For example, the letter “a” have many variations
                like “á”, “à”, “ả”, “ã”, “ạ”, and “a”. However, some
                letters like “b” and “t” do not have any diacritic
                variations. Knowing how to choose the correct diacritic 
                is a classic dilemma for many Vietnamese
                as each variant can give a whole different word.
                For example, the word “má” is mother, the word
                “ma” is ghost, the word “mã” is horse or password.
                Because of the complex diacritic schema, the
                typical Western keyboard is not tailored for
                choosing different diacritics. As a result, many
                Vietnamese have adopted not to include diacritics
                and use context to make sense of the text. This
                usually resulted in ambiguity, as readers have to
                mentally parse through the sentence and infer
                the diacritics. Therefore, we thought it would
                be a good idea to build a diacritics restoration
                model to automate this of restoring the missing
                diacritics to a text excerpt. This would greatly
                help with downstream NLP tasks in Vietnamese
                such as auto-completion, machine translations,
                etc. Our solution utilized a Transformer model,
                and since the seq2seq encoder-decoder is of fixed
                length (a non-diacritic character maps to exactly
                one diacritic character), we hypothesised that the
                translation task will actually be slightly simpler
                than a traditional machine translation task
                where one language is translated from another.</p>

                <p><strong>Somethings to Consider</strong><br/>
                
                <ul style={{marginTop: "-1px"}}>
                    <li>This model far from being state of the
                        art and still need a lot more work for everyday use.</li>
                    <li>Model only take up to 50 characters, including spaces.
                        Anything after 50 characters will not be printed out.</li>
                    <li>If don't read Vietnamese, I recommend using Google Translate.</li>
                    <li>Don't worry about removing diacritics yourself.
                        Model will remove diacritics inputs in the backend and try to restore.</li>
                    <li>Please be patient for long text</li>
                </ul></p>
                
                {/* <input type="text" defaultValue="Chao buoi sang Viet Nam!" onChange={getData} /> */}
                <textarea rows = "5" cols = "60" type="text" placeholder='Input Vietnamese Text Here' defaultValue="Chao buoi sang Viet Nam!" onChange={getData} />
                <br />
                <button onClick={()=>getAnswer()} >Restore Diacritics</button>
                
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

export default VietDia