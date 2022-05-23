import React from 'react';
import './More_Projects.css';
import Cards from './Project_Pages/Cards';
import Navbar from './Project_Pages/index';

function All_Projects() {
  return (
    <>
      <Navbar val="/" />
      <Cards />
    </>
  );
}

export default All_Projects;