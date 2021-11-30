import React from 'react';
import image from '../../images/image1.png'
import './Banner.css'
import {FaFileDownload} from "react-icons/fa";

const Banner = () => {
    return (
        <div className="bg-dark">
            <div className="row mt-3 mb-5">
                <div className="col-lg-6 col-sm-12 d-flex justify-content-center align-items-center">
                    <div>
                        <h1 className="fs-1 fw-bold text-white">Hi, I'm Tanvir Ali</h1>
                        <h3 className="fw-bold text-white">a Web Developer</h3>
                        <a href="#contact">
                        <button className="btn btn-outline-success me-3 mt-3 text-success" >Hire Me</button>
                        </a>
                        <a href="https://drive.google.com/file/d/1XrqtRKCAa0UAW0LuHO-ztZpqh92kjNUf/view">
                        <button className="btn btn-success mt-3 text-white"><FaFileDownload></FaFileDownload> Download Resume</button></a>
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