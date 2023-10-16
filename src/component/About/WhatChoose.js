import React, { useState } from 'react'

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaCamera } from "react-icons/fa";
import { FaBook } from "react-icons/fa";
import { FaCloud } from "react-icons/fa";
import { FaExpandArrowsAlt } from "react-icons/fa";
import { FaClone } from "react-icons/fa";
import { FaScrewdriver } from "react-icons/fa";





import './WhatChoose.css';
function WhatChoose() {
    const [cards] =useState([{
        link:< FaCamera className='icon' />,
        title:'Cameras',
        text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.`
    },
    {
        link:<FaBook className='icon'/>,
        title:'Booking',
        text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.`
    },
    {
        link:<FaCloud className='icon'/>,
        title:'Cloud Library',
        text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.`
    },
    {
        link:<FaExpandArrowsAlt className='icon'/>,
        title:'High Resolution',
        text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.`
    },
    {
        link:<FaClone className='icon'/>,
        title:'Album feature',
        text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.`
    },
    {
        link:<FaScrewdriver className='icon'/>,
        title:'photo retouch',
        text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.`
    }
        
    ])
  return (
    <>
    <section>
    <div className="container5">
        <h2 className="wrap">
          <span className="firstspan1">Why Choose {""}</span>
          <span className="secondspan"> me?</span>
        </h2>
        <div className="cards5">
            {
                cards.map((card,i)=>(
                    <div key={i} className="card5">
                        <div className="i"> {card.link}</div>
                        
                      
                        <h3>
                       
                            {card.title}
                        </h3>
                        <p>
                            {card.text}
                        </p>

                    </div>
                ))
            }
        </div>
        </div>
  </section>
    </>
  )
}

export default WhatChoose
