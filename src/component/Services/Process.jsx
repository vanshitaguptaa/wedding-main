import React from "react";
import "./Process.css";
// import Slider from './Slider';

const Process = () => {
  return (
    <div>
      <div className="container">
        <div className="row mt-5">
          <div className="col-sm-12 mb-6 mb-sm-0  py-2">
            <div className="card1  bg-transparent py-2">
              <div className="card-body">
                <h1 style={{ color: "white" }}>
                  <b>
                    {" "}
                    Skills to <span className="move"> move.</span>
                  </b>
                </h1>
                <p style={{ color: "#989898" }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Velit egestas dui id ornare arcu odio ut sem nulla. Vel turpis
                  nunc eget lorem dolor.
                </p>

                {/* <div className="w3-container py-2 mt-2"> */}
                <p>
                  <span className="p1">
                    PROFESSIONAL INTEGRITY<span className="div1">90%</span>
                  </span>
                  {/* <span className="div1">90% </span> */}
                </p>
                <hr
                  style={{
                    width: "90%",
                    float: "left",
                    height: "5px",
                    background: "goldenrod",
                  }}
                />
                {/* <div className="w3-light-grey">
                                    <div className="w3-container w3-orange w3-center" style={{ width: '90%', fontSize: '7px', color: 'red' }}>90%</div>
                                </div> */}
                <br />
                <p>
                  <span className="p1">
                    AVAILABILITY<span className="div1">80%</span>
                  </span>
                </p>
                <hr
                  style={{
                    width: "80%",
                    float: "left",
                    height: "5px",
                    background: "goldenrod",
                  }}
                />
                {/* <div className="w3-light-grey">
                                    <div className="w3-container w3-orange w3-center" style={{ width: '80%', fontSize: '7px', color: 'saddlebrown' }}>80%</div>
                                </div> */}
                <br />
                <p>
                  <span className="p1">
                    PHOTOSESSION<span className="div1">75%</span>
                  </span>
                  {/* <span className="div1">75%</span> */}
                </p>
                <hr
                  style={{
                    width: "75%",
                    float: "left",
                    height: "5px",
                    background: "goldenrod",
                  }}
                />
                {/* <div className="w3-light-grey">
                                    <div className="w3-container w3-orange" style={{ width: '75%', fontSize: '7px' }}>75%</div>
                                </div> */}
                <br />
                <p>
                  <span className="p1">
                    PORTRAITSTUDIO <span className="div1">95%</span>
                  </span>
                </p>
                <hr
                  style={{
                    width: "95%",
                    float: "left",
                    height: "5px",
                    background: "goldenrod",
                  }}
                />
                {/* <div className="w3-light-grey">
                                    <div className="w3-container w3-orange" style={{ width: '95%', fontSize: '7px' }}>90%</div>
                                </div> */}
                <br />
                <div className="premium-button-text-icon-wrapper"></div>
                <div className="btn3 ">
                  <span className="color white">Read more --</span>
                  <i aria-hidden="true" className="fas fa-arrow-right"></i>
                </div>
              </div>

              {/* hsfhd */}

              {/* hjfkj */}

              {/* <div className='container'> */}
              {/* <div className='row'> */}
              <div className="col-sm-6">
                <div className="card1 bg-transparent py-4">
                  <div>
                    <img
                      className="img-fluid  max-width: 100%  height:auto card-img-top"
                      style={{
                        width: "100%",
                        position: "relative",
                        top: "50px",
                      }}
                      src="https://promo-theme.com/novo-elementor-kit/wp-content/uploads/2021/10/dimitar-belchev-fRBpWLAcWIY-unsplash.jpg"
                      alt="..."
                    />
                  </div>
                  {/* <div>
                                    <img  className="img-fluid  max-width: 100%  height:auto card-img-top" src="https://promo-theme.com/novo-elementor-kit/wp-content/uploads/2021/10/pgaberski-IDNBHZTamQ8-unsplash-800x533.jpg" alt="..." />
                                    </div> */}
                </div>

                {/* <div className="col-sm-6">
                                    <div className="card bg-transparent" style={{ width: '26rem' }}>
                                        <img src="https://promo-theme.com/novo-elementor-kit/wp-content/uploads/2021/10/pgaberski-IDNBHZTamQ8-unsplash-800x533.jpg" className="card-img-top" alt="..." />
                                    </div>
                                </div> */}
                {/* </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Slider /> */}
    </div>
  );
};

export default Process;
