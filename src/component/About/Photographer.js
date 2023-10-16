import React from 'react'
import './Photographer.css';
const Photographer = () => {
return (
<>
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
</>
)
}
export default Photographer