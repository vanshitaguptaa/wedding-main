import React from 'react'
import '../latestproject/LatestProjects.css'
import Navbar from '../../component/Navbar/Navbar'
import Getintouch from '../getintouch/Getintouch'

const Gallery = () => {
  return (
    <>
    <Navbar/>
       <div className='latestProjects'>
           <h1 className='h1'>  Latest <span className='h1Span'>projects.</span></h1>
           <div className='Typelist'>
               <span className='topicType'>All</span>
               <span className='topicType'>Creative</span>
               <span className='topicType'>Portraits</span>
               <span className='topicType'>Natural</span>
               <span className='topicType'>Visual</span>
               <span className='topicType'>Architecture</span>
           </div>
       </div> 
       <div className='PhotosSample'>
         <div className='container'>
           <div className='LeftImg'>
                <img className='img1' src="re-37.jpg" alt="" />
                <img className='img2' src="re-24.jpg" alt="" />
                <img className='img3' src="re-6.jpg" alt="" />
                <img className='img3' src="re-22.jpg" alt="" />
                <img className='img3' src="re-23.jpg" alt="" />
                <img className='img3' src="re-25.jpg" alt="" />
                <img className='img3' src="re-39.jpg" alt="" />
                <img className='img3' src="re-45.jpg" alt="" />
                <img className='img3' src="re-37.jpg" alt="" />
                
           </div>
           <div className='RightImg'>
           <img className='img1' src="re-7.jpg" style={{width:"600px"}} alt="" />
                <img className='img1' src="re-9.jpg"  style={{width:"600px"}}alt="" />
                <img className='img2' src="re-38.jpg" alt="" /> 
                <img className='img3' src="re-40.jpg" alt="" /> 
                <img className='img3' src="SP606437.jpg" alt="" /> 
                <img className='img3' src="re-40.jpg" alt="" /> 
                <img className='img3' src="re-45.jpg" alt="" /> 
                <img className='img3' src="re-46.jpg" alt="" /> 
                <img className='img3' src="re-47.jpg" alt="" /> 
                <img className='img3' src="re-48.jpg" alt="" /> 
                <img className='img3' src="re-49.jpg" alt="" /> 
           </div>
         </div>
            
       </div>

       <Getintouch/>
    </>
  )
}

export default  Gallery

