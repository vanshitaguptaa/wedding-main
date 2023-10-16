import React from 'react'
import Mycard from './Mycard'
import './Imagecarousel.css';
const Imagecarousel = () => {
    let box=document.querySelector('.product-container');
    const btnpressprev=()=>{
let width = box.clientWidth;
box.scrollLeft = box.scrollLeft - width;
console.log(width);
    }
    const btnpressnext=()=>{
        let width = box.clientWidth;
        box.scrollLeft = box.scrollLeft + width;
        console.log(width);  
    }
  return (
   <div className="sliders">
    <button className='pre-btn' onClick={btnpressprev} 
     style={{position:"relative", top:"250px"}}
   > 
        <p>&lt;</p>
    </button>
    <button className='next-btn' onClick={btnpressnext} 
     style={{float:"right",position:"relative", top:"250px"}}>
        <p>&gt;</p>
    </button>
    <div className="product-container">
        <Mycard cardno= <img src='re-22.jpg' style={{width:"300px",height:"400px"}}/>  />   
        <Mycard cardno= <img src='re-4.jpg'style={{width:"300px",height:"400px"}}/>  /> 
        <Mycard cardno= <img src='re-51.jpg' style={{width:"300px",height:"400px"}}/>  />   
        <Mycard cardno= <img src='re-6.jpg'style={{width:"300px",height:"400px"}}/>  />     
        <Mycard cardno= <img src='re-25.jpg'style={{width:"300px",height:"400px"}}/>  />     
        <Mycard cardno= <img src='re-8.jpg'style={{width:"300px",height:"400px"}}/>  />   
        <Mycard cardno= <img src='re-42.jpg'style={{width:"300px",height:"400px"}}/>  />   
        {/* <Mycard cardno='2'/>
        <Mycard cardno='3'/>
        <Mycard cardno='4'/>
        <Mycard cardno='5'/>
        <Mycard cardno='6'/>
        <Mycard cardno='7'/>
        <Mycard cardno='8'/>
        <Mycard cardno='9'/>
        <Mycard cardno='10'/>
        <Mycard cardno='11'/>
        <Mycard cardno='12'/>
        <Mycard cardno='13'/>
        <Mycard cardno='14'/> */}

    </div>
   </div>
  )
}

export default Imagecarousel