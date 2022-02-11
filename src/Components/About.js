import React from 'react';
const About = () => {
    return  <section className="generic" id="about">
    <div className="container">
      <h2 className="display-5 text-danger mb-5">Who I Am</h2>
      <div className="row  mb-3 ">
        <div className="col-sm-12 col-md-8 d-flex align-item-center justify-content-center  rounded-start">
          <div className="d-flex h-80 flex-column justify-content-center">
            <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
            </p>
          </div>
        </div>
        <div className="col-sm-12 col-md-4 p-0">
          <img className="img-fluid" src="https://media.istockphoto.com/photos/money-picture-id503611708?s=612x612" />
        </div>
      </div>

      <div className="row">
        <div className="col-sm-12 col-md-8  d-flex align-item-center justify-content-center rounded-end ">
          <div className="d-flex h-80 flex-column justify-content-center">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
            </p>
          </div>
        </div>
        <div className="col-sm-12 col-md-4 order-first p-0">
          <img className="img-fluid" src="https://media.istockphoto.com/photos/money-picture-id503611708?s=612x612" />
        </div>
      </div>
    </div>
  </section>
};

export default About;
