import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './BackgroundImageInterval.css';
const BackgroundImageInterval = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    "https://i.postimg.cc/qMBszQXy/namanverma.jpg",
    "https://i.postimg.cc/rFhSWWQb/new-Project.jpg",
  ]; // Replace with your image URLs
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  useEffect(() => {
    const image = new Image();
    image.src = images[currentImage];
    image.onload = () => {
      setIsImageLoaded(true);
    };
  }, [currentImage]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  if (!isImageLoaded) {
    return null; // Render null or a loading spinner while the image is being loaded
  }

  return (
    <div className="background-image-container">
      <div className="fade-transition">
        {images.map((imageUrl, index) => (
          <div
            key={index}
            className={`background-image ${
              index === currentImage ? "active" : ""
            }`}
            style={{ backgroundImage: `url(${imageUrl})` }}
          />
        ))}
      </div>
      <div className="main-div">
        <div className="sub-div">
          <h3 className="sub-heading"><img src="/static/media/logo.8c7575c44e7fd183d053.png" class="h-32 mr-3" alt="Flowbite Logo" style={{height:"300px"}} /></h3>
          {/* <button className="sub-button" type="submit"> */}
            
          <Link to="/home" className="btn " aria-current="page" >Enter</Link>
          {/* </button> */}

        </div>
      </div>
    </div>
  );
};

export default BackgroundImageInterval;
