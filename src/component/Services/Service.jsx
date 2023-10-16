import React from 'react'
// import ScardRow from '../component//ScardRow';
import './Service.css';
import PricingPlans from '../../utils/pricingplan/Pricingplan';
import WhatChoose from '../About/WhatChoose';
import Process from './Process';
import Navbar from '../Navbar/Navbar';
import Getintouch from '../../utils/getintouch/Getintouch'
import Imagecarousel from './Imagecarousel';
// import Process from '../component/Process';
// import ServiceCard from '../component/ServiceCard';

const Service = () => {
  return (
    <>
     <Navbar/>
    <div className='cantainer'>
      <div className='row'>
        <div className="col" >
        <img className='img1' src="re-28.jpg" alt="" style={{ width: '90rem',  height:'60rem' }}/>
          {/* <img className="img-fluid  max-width: 100%  height:auto" alt="..." style={{ width: '90rem', height:'550px' }}
            width="1000 " height="300" src="https://promo-theme.com/novo-elementor-kit/wp-content/uploads/2021/10/meric-dagli-PjfYuitzlXQ-unsplash-1536x1536.jpg"
            
            loading="lazy"
            srcset="https://promo-theme.com/novo-elementor-kit/wp-content/uploads/2021/10/meric-dagli-PjfYuitzlXQ-unsplash-1536x1536.jpg 1536w, https://promo-theme.com/novo-elementor-kit/wp-content/uploads/2021/10/meric-dagli-PjfYuitzlXQ-unsplash-300x300.jpg 300w, https://promo-theme.com/novo-elementor-kit/wp-content/uploads/2021/10/meric-dagli-PjfYuitzlXQ-unsplash-1024x1024.jpg 1024w, https://promo-theme.com/novo-elementor-kit/wp-content/uploads/2021/10/meric-dagli-PjfYuitzlXQ-unsplash-150x150.jpg 150w, https://promo-theme.com/novo-elementor-kit/wp-content/uploads/2021/10/meric-dagli-PjfYuitzlXQ-unsplash-768x768.jpg 768w, https://promo-theme.com/novo-elementor-kit/wp-content/uploads/2021/10/meric-dagli-PjfYuitzlXQ-unsplash-2048x2048.jpg 2048w, https://promo-theme.com/novo-elementor-kit/wp-content/uploads/2021/10/meric-dagli-PjfYuitzlXQ-unsplash-800x800.jpg 800w, https://promo-theme.com/novo-elementor-kit/wp-content/uploads/2021/10/meric-dagli-PjfYuitzlXQ-unsplash.jpg 2000w" sizes="(max-width: 1536px) 100vw, 1536px"></img> */}
        </div><br></br>

        {/* <div className="card1 bg-transparent py-2 mt-1 ">
          <div className="card-body">
            <h1><b className='text-align-center'>Our <span className='ser'>services.</span></b></h1>
          </div>
        </div> */}
        
      
      </div>
      <WhatChoose/>
      <PricingPlans/>
      
      <Process/>
    <Imagecarousel/>
<Getintouch/>
    
     


    </div>

    </>
  )
}

export default Service
