import React from "react";
import { resolvePath } from "react-router-dom";
import "./project-template.css";

const ProjectTemplate = () => {
    let dir = "../src/components/Projects/project-template/"

    return (
        <div className = "project-box">
            <div className = "project-box-image">
                
            </div> 
            
            <div className = "project-box-title">
                Posición Software Engineer Junior <br /> @ Netflix USA <br />
            </div>
  
            <div className = "project-box-description">
                rigo sexo
            </div>
        </div> 
    );
    }

export default ProjectTemplate;