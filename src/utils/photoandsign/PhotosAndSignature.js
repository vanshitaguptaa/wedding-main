import React from 'react'
import './PhotosAndSignature.css';

const PhotoSignature = () => {
  return (
    <>
      <div className='SignatureMain'>
            <div className='leftSection'>
                {/* <img className='img' src="https://promo-theme.com/novo-elementor-kit/wp-content/uploads/2021/09/little-photographer-1024x683.jpg" alt="" /> */}
                <img className='img1' src="re-37.jpg" alt="" width="350px" />
                <p className='p'>WE CREATE STYLE,DESIGN, <br /> MOTION FOR YOUR PROJECTS</p>
                {/* <img className='img1' src="re-43.jpg" alt="" /> */}
                <img className='Signature' src="https://promo-theme.com/novo-elementor-kit/wp-content/uploads/2021/10/Signature.png" alt="" />
            </div>
            {/* <img className='leftImg' src="https://promo-theme.com/novo-elementor-kit/wp-content/uploads/2021/09/photographer-at-the-sunset-1024x683.jpg" alt="" /> */}
            <img className='img1' src="re-30.jpg" alt=""  width="450px"/>
      </div>
    </>
  )
}

export default PhotoSignature
