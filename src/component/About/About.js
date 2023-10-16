import React from 'react'
import './about.css';
import { Link ,Outlet} from 'react-router-dom'
import logo from '../../images/logo.png'
import WhatChoose from './WhatChoose';
import Features from './Features';
import Navbar from '../Navbar/Navbar';

const About = () => {
  return (
    <>
    
   <Navbar/>
      {/* <Outlet style={{display:"none"}} /> */}
       <div className="section-container">
<div className="columns-image">
<img src="./img2.jpg" alt="" className="image" />
</div>
<div className="content-text">
      <h2 className="wrap1">
        <span className="firstspan">My Name is Alex Novo,<br/>I'm a {""}</span>
        <span className="secondspan">Photographer.</span>
      </h2>
      <div className="para"><p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
        ipsum sit fugiat blanditiis vero dolore inventore eveniet saepe
        placeat, m Dolorum architecto earum esse soluta laboriosam in at
        maiores voluptatibus nihil saepe quae, assumenda tempore delectus
        ad quod ab molestiae quas! Culpa.
      </p></div>
      <div className="columns-image1">
    <img src="./Signature.png" alt="" className="image5" />
  </div>
      
    </div>
  </div> 
  <WhatChoose/>
  <Features/>
  <div className="touch-container">
      <div className="bold">
        <h1>Get in touch</h1>
      </div>
      <h2>mail@domain.com</h2>
      <p style={{textAlign:"center"}}>
        Feel free to write us. We’ll consider all suggestions, ideas and
        projects.
      </p>
    </div>
    <div className="footer">
        <hr/>
        <p>Copyright @ Ajileminds </p>
    </div>
        </>
  )
}

export default About