import React from 'react';

import './Navbar.css';

const Navbar = () => {
    return (
        
      <nav className="navbar navbar-expand-lg">
      <div className="container">
        <p className="text-white fw-bold">Tanvir Ali</p>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active anchor-btn" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link anchor-btn" href="#">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link anchor-btn" href="#">Projects</a>
            </li>
            <li className="nav-item">
              <a className="nav-link anchor-btn" href="#">Contacts</a>
            </li>
            <li className="nav-item">
              <button className="btn btn-success fw-bold px-5 py-1 rounded-pill  "><a className="nav-link anchor-btn" href="https://drive.google.com/file/d/1XrqtRKCAa0UAW0LuHO-ztZpqh92kjNUf/view">Resume</a></button>
              
            </li>
            
          
          </ul>
         
        </div>
      </div>
    </nav>
        
    );
};

export default Navbar;