import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import '../App.css'


const Fader = ({ text, time }) => {
    const [fadeProp, setFadeProp] = useState({
        fade: 'fade-out',});

    useEffect(() => {
        const timeout = setInterval(() => {
            setFadeProp({fade: 'fade-in'})}, time);})

    return (
        <>
            <p data-testid="fader" className={fadeProp.fade}>{text}</p>
        </>
    )
}

Fader.defaultProps = {
    text: 'Hello World!',
    time: '500'}

Fader.propTypes = {
    text: PropTypes.string,}

export default Fader