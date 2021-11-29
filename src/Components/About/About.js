import React from 'react';
import './About.css';
import image from '../../images/image2.png'

const About = () => {
    return (
        <div className="about mt-5 bg-dark">
            <div className="row">
                <div className="col-lg-6 col-sm-12">
                    <div className="bg-success div-bg rounded">
                        <img className=" bg-black rounded image-bg" src={image} alt="" />
                    </div>
                </div>
                <div className="col-lg-6 col-sm-12 about-content">
                    
                        <h1 className="fw-bold text-white">About Me</h1>
                        <p className="text-white">Hello , I'm Tanvir Ali. I am a MERN stack web developer. I love to learn new technologies.My core skill is based on JavaScript and I love to do most of the things using JavaScript. I am currently pursuing a degree in Bachelor’s of Electrical & Electronic Engineering at International Islamic University Chittagong. </p>

                    

                </div>
            </div>
        </div>
    );
};

export default About;