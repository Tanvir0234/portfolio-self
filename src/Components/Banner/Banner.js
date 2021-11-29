import React from 'react';
import image from '../../images/image1.png'
import './Banner.css'

const Banner = () => {
    return (
        <div className="bg-dark">
            <div className="row mt-3 mb-5">
                <div className="col-lg-6 col-sm-12 d-flex justify-content-center align-items-center">
                    <div>
                        <h1 className="fs-1 fw-bold text-white">Hi, I'm Tanvir Ali</h1>
                        <h3 className="fw-bold text-white">a Developer</h3>
                        <button className="btn btn-outline-success me-3 mt-3 text-success">Hire Me</button>
                        <button className="btn btn-success mt-3 text-white">Download Resume</button>
                    </div>
                </div>
                <div className="col-lg-6 col-sm-12 d-flex justify-content-center align-items-center">
                    <div className="image-div">
                        <img src={image} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;