import React from 'react'
import './SlideSection.css'

const SlideSection = () => {
  return (
    <> 
      <div className='Container'>
          <div className='Rightimg'>
              <img className='img' src="re-49.jpg" alt="" />
          </div>
          <div className='leftContent'>
              <div className='text'>
                 <h2 className='h12' >Portratis</h2>  
                 <h1 className='h1'>Special Design <br /> for your projects</h1>   
              </div>
              <div className='explore-now-btn'>
                 <span className='span'>EXPLORE NOW</span>
              </div>
          </div>
      </div>
    </>
  )
}

export default SlideSection
