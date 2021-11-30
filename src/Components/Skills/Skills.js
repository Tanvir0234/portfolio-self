import React from 'react';
import './Skills.css';

const Skills = () => {
    return (
        <div className="container  my-5" id="skill">
            <h1 className="text-white text-center">My Skills</h1>
            
            <div className="row py-5">
                
                
                <div className="col-lg-4 col-sm-12">

                    <div className="py-4 px-2">
                        <h2 className="text-white">Front End</h2>
                        <button type="button" class="btn btn-outline-success text-white">JavaScript</button>
                        <button type="button" class="btn btn-outline-success mx-2 text-white">React Js</button>
                        <button type="button" class="btn btn-outline-success text-white">HTML</button>
                        <button type="button" class="btn btn-outline-success mx-2 my-2 text-white">CSS</button>
                        <button type="button" class="btn btn-outline-success text-white">Bootstrap</button>
                        <button type="button" class="btn btn-outline-success mx-2 text-white">Talwind</button>
                        <button type="button" class="btn btn-outline-success p-2 text-white">Material UI</button>
                    </div>

                </div>
                <div className="col-lg-4 col-sm-12">
                    <div className="py-4 px-2">
                        <h2 className="text-white">Back End</h2>
                        <button type="button" class="btn btn-outline-success text-white">Node Js</button>
                        <button type="button" class="btn btn-outline-success mx-2 my-2 text-white">Express JS</button>
                        <button type="button" class="btn btn-outline-success text-white">MongoDB</button>
                        <button type="button" class="btn btn-outline-success text-white">MySQL</button>
                    </div>

                </div>
                <div className="col-lg-4 col-sm-12">
                    <div className="py-4 px-2">
                    <h2 className="text-white">Others</h2>
                    <button type="button" class="btn btn-outline-success text-white">C#</button>
                    <button type="button" class="btn btn-outline-success text-white mx-2">ASP.NET</button>

                    </div>
                   
                </div>

            </div>
            </div>
            
     

    );
};

export default Skills;