import React, { useState, useEffect } from 'react'

function VietDia() {
    const [data,setData] = useState([{}])
    const [answer,setAnswer] = useState([{}])
    const [print,setPrint]=useState(false)

    // TODO: fix print data without an input
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
        // setPrint(false)
    }

    function getData(val)
  {
    console.warn(val.target.value)
    setData(val.target.value)
    // setPrint(false)
  }
  
  
    return (
    <div>
        
        <input type="text" onChange={getData} />
        <button onClick={()=>getAnswer()} >Print Data</button>

        
        {
        print?
            <h1> {answer.answer}</h1>
        :<p>Loading...</p>
        }

    </div>
  )
}

export default VietDia